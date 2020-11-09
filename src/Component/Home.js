import React from "react";
import joinUs from "../images/doggo-joinUs.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="joinUss">
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
        <Link to="/careerDescription/0">
          <div className="employee-items">
            <div className="employee-title">Front-end Developer</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
        <Link to="/careerDescription/1">
          <div className="employee-items">
            <div className="employee-title">Back-end Developer</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
        <Link to="/careerDescription/2">
          {" "}
          <div className="employee-items">
            <div className="employee-title">Data Analist</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
      </div>
      <div className="employee">
        <Link to="/careerDescription/3">
          <div className="employee-items">
            <div className="employee-title">Front-end / Mobile Developer</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
        <Link to="/careerDescription/4">
          <div className="employee-items">
            <div className="employee-title">Marketing</div>
            <div className="employee-text">Stajyer</div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
