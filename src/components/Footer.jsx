import React, { useEffect, useState } from "react";
import "../assets/scss/footer.scss";
import Logo from "../assets/images/logo.png";
import axios from "axios";
import FooterInfo from "./Footer-info";

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState([]);

  const getCompanyInfo = async () => {
    const response = await axios.get(
      "http://localhost:3000/companyInfoRigtSideItem"
    );
    const { data } = await response;

    setCompanyInfo(data);
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <div className="footer">
      <div className="footer-info-container">
        <div className="footer-info-container-left">
          <img src="images/phone.png" alt="" />
        </div>
        <div className="footer-info-container-right">
          <div className="footer-info-top">
            <div className="card-link-qcode">
              <img src="images/qrcode.png" alt="" />
            </div>
            <div className="card-link-top-text">
              <p>Çiçek Sepeti Mobil uygulamayı indirin.</p>
              <span>Mobil uygulamayı QR Kod ile indirin</span>
            </div>
          </div>
          <div className="footer-info-bottom">
            <img src="images/googlePlay.png" alt="" />
            <img src="images/appStore.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="left-side">
          <div className="left-side-image">
            <img src={Logo} alt="" />
          </div>
          <div className="left-side-socialMedia">
            <img src="images/facebook.png" alt="" />
            <img src="images/twitter.png" alt="" />
            <img src="images/instagram.png" alt="" />
            <img src="images/youtube.png" alt="" />
            <img src="images/edit.png" alt="" />
          </div>
          <div className="left-side-text">
            <p>
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini
              önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
              kapsamında oluşturduğumuz aydınlatma metnine{" "}
              <a href="#!">buradan</a> ulaşabilirsiniz.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-lists">
            {companyInfo.map((info) => (
              <ul key={info.id}>
                <FooterInfo data={info.children} />
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
          mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi”
          Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek
          gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz
          Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze
          çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
          beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş
          verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu
          günlerinde onların sevincine ortak olmak için yapmanız gereken sadece
          birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler
          Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood
          ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin
          adresi; ÇiçekSepeti.
        </p>
      </div>
    </div>
  );
};

export default Footer;
