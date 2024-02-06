import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div id="footer" className="pt-5">
          <div className="container py-3">
            <div className="row text-center g-5">
              <div className="col-md-4">
                <div className="inner">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">
                  <h3>AROUND THE WEB</h3>
                  <ul className="list-unstyled d-flex gap-3 align-items-center justify-content-center">
                    <li>
                      <i class="fa-brands fa-facebook-f fs-5"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter fs-5"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in fs-5"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-globe fs-5"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="inner">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right text-center py-4 mt-4">
            <p className="m-0">Copyright &copy; Your Website 2021</p>
          </div>
        </div>
      </>
    );
  }
}
