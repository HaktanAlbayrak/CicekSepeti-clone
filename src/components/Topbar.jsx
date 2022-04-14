import React, { useRef, useState } from "react";
import "../assets/scss/topbar.scss";
import Logo from "../assets/images/logo.png";
import Shopping_cart from "../assets/images/shopping_cart.png";
import Search_icon from "../assets/images/search_icon.png";

const Topbar = ({ setSearchValue, pushProduct, cart }) => {
  const [characterCount, setCharacterCount] = useState(0);
  const search = useRef(null);

  // const handleSearchInput = (e) => {
  //   const countValueLength = e.target.value.length;

  //   const searchValue = e.target.value;

  // };

  const handleSearchButton = () => {
    const searchValue = search.current.value;
    const searchLenght = search.current.value.length;

    if (characterCount < 3) {
      pushProduct(searchValue);
    } else if (characterCount > 2) {
      setSearchValue(searchValue);
    }
    setCharacterCount(searchLenght);
  };

  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="center">
          <img className="search-icon" src={Search_icon} alt="" />
          <input
            // onChange={handleSearchInput}
            type="text"
            placeholder="Ürün Ara"
            className="search-input"
            ref={search}
          />
          <button onClick={handleSearchButton} className="search-button">
            Ara
          </button>
        </div>
        <div className="right">
          <img src={Shopping_cart} alt="" />
          <span className="shopping-cart">Sepetim</span>
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
