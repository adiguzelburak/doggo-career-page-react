import React from "react";
import navbarIcon from "../images/doggo.png";
import $ from "jquery";
import { Link } from "react-router-dom";
function Navbar() {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  $(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  });
  return (
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <Link to="/">
          <a class="navbar-start navbar-item">
            <img
              src={navbarIcon}
              className="navbarIcon left-side"
              width="auto"
              height="auto"
            ></img>
          </a>
        </Link>
        <div
          role="button"
          className="navbar-burger has-dropdown"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        <div id="set-meet-navbar" className="navbar-item set-meet-navbar">
          Tanışma Yürüyüşü Planla!
        </div> 

        <div class="navbar-menu" id="navMenu"></div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/">
            <a class="navbar-item">Kariyer</a>
          </Link>

          <a class="navbar-item">SSS</a>

          <a class="navbar-item">İletişim</a>
        </div>

        {/* Navbar Menu */}
        <a class="navbar-dropdown navbar-item">Neden DogGO?</a>
        <a class="navbar-dropdown navbar-item">Yardımsever DogGO</a>
        <a class="navbar-dropdown navbar-item">DogGO Garantisi</a>
        <a class="navbar-dropdown navbar-item">DogGO Dünyası</a>
        <div class="navbar-end">
          <div id="setMeet" class="navbar-item">
            Tanışma Yürüyüşü Planla!
          </div>
          <div id="beWalker" class="navbar-item">
            Doggo Walker Ol!
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <i className="fab fa-instagram fa-1x icons"></i>
              <i className="fab fa-facebook-f fa-1x icons"></i>
              <i className="fab fa-twitter fa-1x icons"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
