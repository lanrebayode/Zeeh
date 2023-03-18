import React from "react";
import Image from "next/image";

import Style from "./NavBar.module.css";
import zeehLogo from "../../public/zeeh-logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_logo}>
          <Image
            className={Style.NavBar_box_logo_img}
            src={zeehLogo}
            alt="zeeh-logo"
            width={40}
            height={40}
          />
          <h5>Zeeh</h5>
        </div>
        <p>Business</p>
        <p>Personal</p>
        <p>Pricing</p>
        <p>Document</p>
        <div className={Style.product}>
          <p>Products </p>
          <RiArrowDropDownLine className={Style.arrow} />
        </div>
        <p>Company</p>
        <div className={Style.NavBar_box_button}>
          <button className={Style.NavBar_box_button1}>Login</button>
          <button className={Style.NavBar_box_button2}>Sign-up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
