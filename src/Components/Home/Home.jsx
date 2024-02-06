import React, { Component } from "react";
import "./Home.css";
import homeImage from "../../Images/avataaars.svg";

export default class Home extends Component {
  render() {
    return (
      <>
        <div id="home" className="py-5 text-center">
          <div className="container py-5  mt-5">
            <img src={homeImage} alt="avatar" className="d-block w-25 m-auto" />
            <h2 className="mt-3 fw-bolder">START FRAMEWORK</h2>
            <div className="star d-flex gap-3 align-items-center justify-content-center py-3">
              <div className="line-one"></div>
              <i class="fa-solid fa-star fs-4"></i>
              <div className="line-two"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </>
    );
  }
}
