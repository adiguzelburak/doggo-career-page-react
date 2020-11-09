import React from "react";
import stajyer from "../images/stajyer.png";
import Navbar from "./Navbar";
import jobs from "../jobs";
import Footer from "./Footer";
const Pages = ({ match }) => {
  const contextItems = jobs.map((data, index) => data);

  return (
    <div>
      <Navbar />
      <div className="joinUs">
        <img src={stajyer} className="joinImg" height="200" width="200"></img>
        <div> </div>
        <div className="title-content">
          <div className="titleJoinUs">
            {contextItems[match.params.id].title}
          </div>
          <div className="title-join-us-intern">
            {contextItems[match.params.id].subtitle}
          </div>
          <div className="apply">ÖZGEÇMİŞİN İLE BAŞVUR</div>
        </div>
      </div>
      <div className="career career-be-like-developer">
        <h3 className="titles">{contextItems[match.params.id].beWorker}</h3>
        <br></br>
        <span>
          {contextItems[match.params.id].description.map((x) => (
            <li className="lists">{x}</li>
          ))}
        </span>
        <br></br>
      </div>
      <div className="career career-features">
        <h3 className="titles">Aradığımız Özellikler</h3>
        <br></br>
        <span>
          {contextItems[match.params.id].abilities.map((x) => (
            <li className="lists">{x}</li>
          ))}
        </span>
        <br></br>
      </div>
      <div className="career career-responsibilities">
        <h3 className="titles">Sorumlulukların</h3> <br></br>
        <div>
          {contextItems[match.params.id].responsibilities.map((e) => (
            <li className="lists">{e}</li>
          ))}
        </div>
        <br></br>
      </div>
      <div className="career career-work-for-doggo">
        <h3 className="titles">DogGO'da Çalışmak</h3> <br></br>
        <span>
          {contextItems[match.params.id].workingAtDoggo.map((y) => (
            <li className="lists">{y}</li>
          ))}
        </span>
        <br></br>
        <a href={contextItems[match.params.id].link} className="apply">
          ÖZGEÇMİŞİN İLE BAŞVUR
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Pages;
