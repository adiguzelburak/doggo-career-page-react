import React from "react";
import stajyer from "../images/stajyer.png";
import doggo from "../images/doggo.png";
import apple from "../images/apple.png";
import google from "../images/google.png";
import check from "../images/check.png";
import Navbar from "./Navbar";
function Pages() {
  const fetchItems = async () => {
    const data = await fetch("jobs.js")
    .then(response=>response.text())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
  };
  fetchItems();
  return (
    <div>
      <Navbar />
      {/* <div className="career-page">
        <img className="joinImg" src={stajyer} height="200" width="200"></img>
        <div className="career-left-side">
          <div className="titleJoinUs">Front-end Developer</div>
          <div className="title-join-us">Stajyer</div>
          <div className="apply">ÖZGEÇMİŞİN İLE BAŞVUR</div>
        </div>

      </div> */}
      <div className="joinUs">
        <img src={stajyer} className="joinImg" height="200" width="200"></img>
        <div className="title-content">
          <div className="titleJoinUs">Front-end Developer</div>
          <div className="title-join-us-intern">Stajyer</div>
          <div className="apply">ÖZGEÇMİŞİN İLE BAŞVUR</div>
        </div>
      </div>
      <div className="career career-be-like-developer">
        <h3 className="titles">Front-end Developer Stajyer'i Olarak</h3>
        <br></br>
        <span>
          <img src={check} height="16" width="16"></img> Yazılım geliştirme
          konusunda kendini geliştirmeye istekli,
        </span>
        <br></br>
        <span>
          <img src={check} height="16" width="16"></img> Öğrenmeye açık,
          Dünya’nın önde gelen uygulamalarının kullandığı teknolojilerde
          kendisini geliştirmek isteyen,
        </span>
        <br></br>
        <span>
          <img src={check} height="16" width="16"></img> Planlama becerileri
          yüksek ve Moda’daki ofisimizde haftanın en az üç günü bizimle
          çalışabilecek takım arkadaşları arıyoruz. (Duruma göre uzaktan çalışma
          olanağı tanımaktayız.)
        </span>
        <br></br>
        <span>
          <img src={check} height="16" width="16"></img> Mobil uygulama
          üzerinden hizmet veren bir şirketin geliştirilmesinde etkin rol
          alarak, köpek sahiplerinin ve DogGO Walker’ların deneyimleri üzerinde
          doğrudan etkili olacaksın.
        </span>
      </div>
      <div className="career career-features">
        <h3 className="titles">Aradığımız Özellikler</h3>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div className="career career-responsibilities">
        <h3 className="titles">Sorumlulukların</h3>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="career career-work-for-doggo">
        <h3 className="titles">DogGO'da Çalışmak</h3>
        <span>1</span>
        <span>2</span>
        <span>3</span>
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

export default Pages;
