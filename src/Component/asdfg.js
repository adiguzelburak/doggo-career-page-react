import React from "react";
import navbarIcon from "../images/navbarIcon.PNG";
function Navbar1() {
  return (
    <div className="nav-bar">
      <div className="left-side">
        <img src={navbarIcon} className="column imgIcon"></img>
        <div className="left-pages">
          <span className="column left-pages-item"> Kariyer </span>
          <span className="column left-pages-item"> SSS </span>
          <span className="column left-pages-item"> Bize Ulaşın </span>
        </div>
      </div>
      <div className="right-side">
        <div className="right-pages">
          <span id="setMeetings">Tanışma Yürüyüşü Planla!</span>
          <span id="beDoggoWalker" className="right-pages-item">DogGO Walker Ol!</span>
          <i className="fab fa-instagram fa-1x right-pages-item"></i>
          <i className="fab fa-facebook-f fa-1x right-pages-item"></i>
          <i className="fab fa-twitter fa-1x right-pages-item"></i>
        </div>
      </div>
    </div>
  );
}
export default Navbar;


<nav>
<div class="navbar-brand">
  <a
    role="button"
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>

  <a class="navbar-item" href="">
    <img src={navbarIcon}></img>
  </a>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">Kariyer</a>
      <a class="navbar-item">SSS</a>
      <a class="navbar-item">Bize Ulaşın</a>
    </div>
  </div>
  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-primary">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light">Log in</a>
      </div>
    </div>
  </div>
</div>
</nav>