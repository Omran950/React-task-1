import React, { Component } from "react";
import "./Portfolio.css";
import imageOne from "../../Images/poert1.png";
import imageTwo from "../../Images/port2.png";
import imageThree from "../../Images/port3.png";
import $ from "jquery";

export default class Portfolio extends Component {
  displayFixedLayer() {
    let imgUrl;
    $("figure").on("click", function () {
      imgUrl = $(this).find("img").attr("src");
      $("#mainLayer").removeClass("d-none").addClass("d-flex");
      $("#mainLayer").find("img").attr("src", imgUrl);
      $("body").css("overflow", "hidden");
    });
  }
  hideFixedLayer() {
    $("#mainLayer").on("click", function (e) {
      if (e.target.id === "mainLayer") {
        console.log($(this).attr("src"));
        $("#mainLayer").removeClass("d-flex").addClass("d-none");
        $("body").css("overflow", "auto");
      }
    });
  }

  componentDidMount() {
    this.displayFixedLayer();
    this.hideFixedLayer();
  }

  render() {
    return (
      <>
        <div
          id="mainLayer"
          className=" align-items-center justify-content-center position-fixed w-100 vh-100 bg-info  bg-opacity-50 z-3 d-none"
        >
          <img src="" alt="" className="w-50 m-auto" />
        </div>
        <div id="portfolio" className="py-5">
          <div className="container py-5 mt-5">
            <h2 className="text-center fw-bolder fs-1">PORTFOLIO COMPONENT</h2>
            <div className="star d-flex gap-3 align-items-center justify-content-center py-2">
              <div className="line-one"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line-two"></div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4">
                <figure className="position-relative rounded-3 overflow-hidden">
                  <img src={imageOne} alt="home" className="w-100 d-block" />
                  <div className="layer position-absolute start-0 end-0 top-0 bottom-0  d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="position-relative rounded-3 overflow-hidden">
                  <img src={imageTwo} alt="home" className="w-100 d-block" />
                  <div className="layer position-absolute start-0 end-0 top-0 bottom-0  d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="position-relative rounded-3 overflow-hidden">
                  <img src={imageThree} alt="home" className="w-100 d-block" />
                  <div className="layer position-absolute start-0 end-0 top-0 bottom-0  d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="position-relative rounded-3 overflow-hidden">
                  <img src={imageOne} alt="home" className="w-100 d-block" />
                  <div className="layer position-absolute start-0 end-0 top-0 bottom-0  d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="position-relative rounded-3 overflow-hidden">
                  <img src={imageTwo} alt="home" className="w-100 d-block" />
                  <div className="layer position-absolute start-0 end-0 top-0 bottom-0  d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="position-relative rounded-3 overflow-hidden">
                  <img src={imageThree} alt="home" className="w-100 d-block" />
                  <div className="layer position-absolute start-0 end-0 top-0 bottom-0  d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-6x text-white"></i>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
