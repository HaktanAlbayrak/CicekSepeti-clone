import React, { useEffect, useState } from "react";
import "../assets/scss/categories.scss";
import TitleImage from "../assets/images/menuBar.png";
import axios from "axios";

const Categories = ({ pushCategoryInfo }) => {
  const [categories, setCategories] = useState([]);
  const [selectedButton, setSelectedButton] = useState(1);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:3000/categories");
    const { data } = await response;
    setCategories(data);
  };

  const handlebuttonEvents = (e) => {
    let categoriesInfo = [...categories];
    const buttonId = parseInt(e.target.id);
    setSelectedButton(buttonId);

    const selectedCategoryId = parseInt(e.target.id);
    const selectedCategoryTitle = e.target.value;

    const obj = {
      categoryId: selectedCategoryId,
      categoryTitle: selectedCategoryTitle,
    };

    const category = categoriesInfo.find((x) => x.id === obj.categoryId);
    pushCategoryInfo(category);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="categories-container">
      <div className="categories-title">
        <div className="categories-title-image">
          <img src={TitleImage} alt="" />
        </div>
        <h5 className="categories-title-text">Kategoriler</h5>
      </div>
      <div className="categories-menu" onClick={handlebuttonEvents}>
        {categories.map((item) => (
          <button
            key={item.id}
            className="categories-menu-item"
            id={item.id}
            value={item.name}
            style={{
              backgroundColor: selectedButton === item.id && "#044DC3",
            }}
          >
            <span
              value={item.name}
              id={item.id}
              style={{
                color: selectedButton === item.id && "#FFFFFF ",
              }}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
