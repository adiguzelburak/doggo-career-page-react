import React from "react";

import doggo from "../images/doggo.png";
import apple from "../images/apple.png";
import google from "../images/google.png";
const Footer = () => {
  return (
    <div>
      <div className="aboutUs">
        <div className="about-applications">
          <img src={doggo} height="45" width="180"></img>
          <span className="download">HEMEN İNDİR!</span>
          <div className="apps">
            <img className="apple" src={apple} height="45" width="145"></img>
            <img src={google} height="45" width="145"></img>
          </div>
        </div>
        <div className="about-us-text">
          <span>DogGO Nedir?</span>
          <span>Neden DogGO?</span>
          <span>Nerelerdeyiz?</span>
          <span>DogGO Walker Ol!</span>
          <span>Yardımsever DogGO</span>
          <span>DogGO Garantisi</span>
        </div>
        <div className="about-us-text">
          <span>Değişen Hayatlar</span>
          <span>DogGO Dünyası</span>
          <span>Tanışma Yürüyüşü</span>
          <span>Kariyer</span>
          <span>SSS</span>
          <span>Bize Ulaşın</span>
        </div>
        <div className="about-us-text">
          <span>Kullanıcı Sözleşmesi</span>
          <span>Iyzico Alıcı Sözleşmesi</span>
          <span>Iyzico Satıcı Sözleşmesi</span>
          <span>Veri Politikası</span>
          <span>Kullanıcı Aydınlatma Metni</span>
          <span>Walker Aydınlatma Metni</span>
          <span>Çerez Politikası</span>
        </div>
        <div className="about-info">
          <div className="adress">
            <i class="fas fa-map-marker-alt fa-2x about-icon"></i>

            <p>
              Moda, Caferağa Mahallesi, General Asım Gündüz Caddesi, Altıncan
              Apartmanı No: 69/7, Kadıköy/İstanbul
            </p>
          </div>
          <div className="mail">
            <i class="far fa-envelope fa-2x about-icon"></i>
            <div>info@doggoapp.com</div>
          </div>
        </div>
      </div>
      <div className="copyright">© DogGO 2019 v2.18</div>
    </div>
  );
};

export default Footer;
