import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class NavBar extends Component {
  addActiveClassToNavLinks() {
    $("#navBar .container ul .nav-link ").on("click", function () {
      $("#navBar .container ul .nav-link ").removeClass("active");
      $(this).addClass("active");
    });
  }
  removeActiveClassToNavLinks() {
    $("#navBar .container .navbar-brand ").on("click", function () {
      $("#navBar .container ul .nav-link ").removeClass("active");
    });
  }
  navBarScroll() {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 20) {
        $("#navBar").removeClass("py-4");
        $("#navBar").addClass("py-0");
      } else {
        $("#navBar").removeClass("py-0");
        $("#navBar").addClass("py-4");
      }
    });
  }
  componentDidMount() {
    this.addActiveClassToNavLinks();
    this.removeActiveClassToNavLinks();
    this.navBarScroll();
  }
  render() {
    return (
      <>
        <nav id="navBar" className="navbar navbar-expand-lg py-4 fixed-top z-3">
          <div className="container">
            <Link className="navbar-brand fw-bolder fs-2" to="/home">
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-bolder text-uppercase"
                    aria-current="page"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-bolder text-uppercase"
                    aria-current="page"
                    to="portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link fw-bolder text-uppercase"
                    aria-current="page"
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
