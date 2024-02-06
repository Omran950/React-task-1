import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact" className="py-5">
          <div className="container py-5 mt-5">
            <h2 className="text-center fw-bolder fs-1">CONATCT SECTION</h2>
            <div className="star d-flex gap-3 align-items-center justify-content-center py-2">
              <div className="line-one"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line-two"></div>
            </div>
            <div className="form py-5 mt-4 w-75 m-auto">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  placeholder="userName"
                />
                <label for="floatingInput">userName :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputAge"
                  placeholder="userAge"
                />
                <label for="floatingPassword">userAge :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="userEmail"
                />
                <label for="floatingPassword">userEmail :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPasswordPassword"
                  placeholder="userPassword"
                />
                <label for="floatingPassword">userPassword :</label>
              </div>
              <button type="button" className="btn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
