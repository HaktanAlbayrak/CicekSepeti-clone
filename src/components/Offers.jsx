import React from "react";
import "../assets/scss/offers.scss";

const Offers = () => {
  const offers = [
    {
      id: 1,
      image: "images/delivery.png",
      title: "75 TL Üzerine Teslimat Ücreti Bizden",
      buttonText: "Detaylı Bilgi",
      bgColor: "#FFEAE8",
    },
    {
      id: 2,
      image: "images/gift.png",
      title: "Hediye Kategorisi için Sepette %15 İndirim",
      buttonText: "Hediye Ürünleri",
      bgColor: "#E8F1FF",
    },
    {
      id: 3,
      image: "images/stationary.png",
      title: "Kırtasiye Kategorisi için Sepette %15 İndirim",
      buttonText: "Detaylı Bilgi",
      bgColor: "#E2F7E1",
    },
  ];

  return (
    <div className="offers-container">
      {offers.map((item) => (
        <div
          className="offers-offerCard"
          style={{ backgroundColor: item.bgColor }}
          key={item.id}
        >
          <div className="offers-offerCard-image">
            <img src={item.image} alt="" />
          </div>
          <div className="offers-offerCard-info">
            <p>{item.title}</p>
            <button>
              <span>{item.buttonText}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
