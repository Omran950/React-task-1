import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div id="about" className="py-5">
          <div className="container py-5 my-5">
            <h2 className="text-center fw-bolder fs-1">ABOUT COMPONENT</h2>
            <div className="star d-flex gap-3 align-items-center justify-content-center py-2">
              <div className="line-one"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line-two"></div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5">
                <p className="p-3 m-0">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-5">
                <p className="p-3 m-0">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
