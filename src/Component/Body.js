import React from "react";
import joinUs from "../images/doggo-joinUs.png";
import doggo from "../images/doggo.png";
import apple from "../images/apple.png";
import google from "../images/google.png";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div>
      <div className="joinUs">
        <img src={joinUs} className="joinImg" height="300" width="auto"></img>
        <div className="title-content">
          <div className="titleJoinUs">Ekibimize Katıl!</div>
          <div className="content">
            DogGO, mobil uygulama üzerinden pet sahiplerine köpek gezdirme
            hizmeti sunan bir girişimdir. Girişimimizin en büyük amacı, pet
            sahiplerine aradıkları güvenli hizmeti sunmak ve ulaşılabilir hale
            getirmek, can dostlarımızın ve sahiplerinin hayatını daha iyi
            kılmak, Türkiye’de sahiplenmeyi arttırmak ve köpek bakım kültürünü
            oturtmaktır. Şu an Türkiye’de köpek gezdirme hizmetine odaklanan
            uygulamamız, kısa süre içinde evde bakım hizmetlerini de kapsayarak
            Avrupa pazarına açılmayı hedeflemektedir.
          </div>
        </div>
      </div>
      <div className="employee">
        <Link to='/careerDescription'>
          <div className="employee-items">
            <div className="employee-title">Front-end Developer</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
        <Link to='/careerDescription'>
          <div className="employee-items">
            <div className="employee-title">Back-end Developer</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
        <Link to='/careerDescription'>
          {" "}
          <div className="employee-items">
            <div className="employee-title">Data Analist</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
      </div>
      <div className="employee">
        <Link to='/careerDescription'>
          <div className="employee-items">
            <div className="employee-title">Front-end / Mobile Developer</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
        <Link to='/careerDescription'>
          <div className="employee-items">
            <div className="employee-title">Marketing</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
      </div>
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
}

export default Body;
