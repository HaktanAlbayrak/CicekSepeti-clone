import React, { useState } from "react";
import Background from "../assets/images/header.png";
import "../assets/scss/header.scss";
import styled from "styled-components";

const Header = ({ total }) => {
  const StyledCartBar = styled.span`
    &:before {
      width: ${(p) => p.width};
    }
  `;

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
      className="header"
    >
      <h1 className="header-title">ÇiçekSepeti H1</h1>
      <div className="header-cartBar">
        <i className="arrow up"></i>
        <div className="header-cartBar-text">
          {500 - total > 0 ? (
            <>
              <img src="images/bonus.png" alt="" />
              <span>{(500 - total).toFixed(1)} TL</span>
              <p>ürün daha ekleyin kargo bedava</p>
            </>
          ) : (
            <p>Kargo bedava</p>
          )}
        </div>
        <div className="header-cartBar-bar">
          <StyledCartBar
            width={`${(total / 500) * 100 > 100 ? 100 : (total / 500) * 100}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
