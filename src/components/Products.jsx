import React, { useState, useEffect } from "react";
import Leaf from "../assets/images/leaf.png";
import "../assets/scss/products.scss";
import axios from "axios";
import Pagination from "./Pagination";

const Products = ({
  categoryInfo,
  searchValue,
  cart,
  setCart,
  total,
  setTotal,
}) => {
  // const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(20);
  const [filteredResults, setFilteredResults] = useState([]);
  const [changeButtonView, setChangeButtonView] = useState(0);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    const { data } = await response;
    // setProducts(data);

    const filteredProduct = data.filter((element) =>
      element.categoryId.includes(categoryInfo.id)
    );
    setFilteredResults(filteredProduct);
    setCurrentPage(1);

    if (searchValue !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setCurrentPage(1);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const incCart = (item) => {
    setCart((current) => [...current, item]);
    setTotal((current) => Math.round(current + item.price));

    let modifiedIncreaseProducts = [...currentProducts];
    const objIndex = modifiedIncreaseProducts.findIndex(
      (obj) => obj.id === item.id
    );

    modifiedIncreaseProducts[objIndex].orderCount += 1;
  };

  const decCart = (item) => {
    let modifiedDecreaseProducts = [...currentProducts];

    const objDecreaseIndex = modifiedDecreaseProducts.findIndex(
      (obj) => obj.id === item.id
    );

    if (!(modifiedDecreaseProducts[objDecreaseIndex].orderCount === 0)) {
      modifiedDecreaseProducts[objDecreaseIndex].orderCount -= 1;
      setTotal((current) => Math.round(current - item.price));
    }

    const productIndex = modifiedDecreaseProducts.findIndex(
      (obj) => obj.name === item.name
    );

    const update = [...cart];
    update.splice(productIndex, 1);
    setCart(update);
  };

  const handleShowAddSubtractButton = (id) => {
    setChangeButtonView(id);
  };

  const handleShowAddButton = () => {
    setChangeButtonView(0);
  };

  useEffect(() => {
    getProducts();
  }, [categoryInfo, searchValue]);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPagesNum = Math.ceil(filteredResults.length / productPerPage);

  return (
    <div className="products-container">
      <div className="products-title">
        <img src={Leaf} alt="" />
        <p key={categoryInfo.id} className="category-title">
          {categoryInfo.name}
        </p>
      </div>
      <div className="products-item">
        {currentProducts.map((item) => (
          <div key={item.id} className="products-productCard">
            <div className="products-productCard-image">
              <img src={item.image} alt="" />
            </div>
            <p className="products-productCard-text">{item.name}</p>
            <p className="products-productCard-freeDeliveryText">
              {item.isDeliveryFree ? "Ücretsiz Teslimat" : ""}
            </p>
            <p className="products-productCard-price">{item.price} TL</p>
            <div
              className="products-productCard-button"
              onMouseEnter={() => handleShowAddSubtractButton(item.id)}
              onMouseLeave={handleShowAddButton}
              style={{
                border: changeButtonView === item.id && "1px solid #E2E7E9",
              }}
            >
              {changeButtonView === item.id ? (
                <div className="products-productCard-button-add-subtract">
                  <button
                    onClick={() => decCart(item)}
                    className="decreaseButton"
                  >
                    <span className="line"></span>
                  </button>
                  <span>{item.orderCount}</span>
                  <button
                    onClick={() => incCart(item)}
                    className="increaseButton"
                  >
                    <img src="images/plus.png" alt="" />
                  </button>
                </div>
              ) : (
                <span className="add-cart">Sepete Ekle</span>
              )}
              {/* <span>Sepete Ekle</span>
                <button
                  onClick={() => decCart(item)}
                  className="decreaseButton"
                >
                  <span className="line"></span>
                </button>
                <span>{item.orderCount}</span>
                <button
                  onClick={() => incCart(item)}
                  className="increaseButton"
                >
                  <img src="images/plus.png" alt="" />
                </button> */}
            </div>
          </div>
        ))}
      </div>
      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Products;
