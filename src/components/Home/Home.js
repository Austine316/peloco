import React, { Component } from "react";
import classes from "./Home.css";
import Shirt from "./../../assets/img/landing-image.png";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <img src={Shirt} alt="home" className={classes.Img} />
        <div className={classes.Overlay} />
        <div className={classes.Headding}>
          <h1 className={classes.Title}>Choose the perfect outfit</h1>
          <NavLink to="/shop">
            <button className={classes.Btn}>shop now</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
