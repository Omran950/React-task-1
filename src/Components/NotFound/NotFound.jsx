import React, { Component } from "react";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <div
          id="notFound"
          className="d-flex align-items-center justify-content-center vh-100"
        >
          <div className="text-center text-white">
            <h2 className="fs-1 fw-bold">Error 4 0 4</h2>
            <p className="fs-4">Page Not Found</p>
          </div>
        </div>
      </>
    );
  }
}
