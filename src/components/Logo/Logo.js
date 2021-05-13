import React from "react";
import Emy from "../../assets/img/peloco_logo.png";

const Logo = (props) => {
  return (
    <div onClick={props.click}>
      <img src={Emy} alt="logo" />
    </div>
  );
};

export default Logo;
