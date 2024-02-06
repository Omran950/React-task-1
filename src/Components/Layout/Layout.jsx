import React, { Component } from "react";
import "./Layout.css";
import NavBar from "./../NavBar/NavBar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  }
}
