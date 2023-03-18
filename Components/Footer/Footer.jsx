import React from "react";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import Style from "./Footer.module.css";
import zeeh from "../../public/zeeh-logo.png";
import Zeeh from "../../public/ZEEH-LOGO.svg";

const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.Footer_box}>
        <div className={Style.Footer_box_box}>
          <div className={Style.Footer_box_box_zeeh}>
            <Image
              className={Style.Footer_box_box_zeeh_img}
              src={Zeeh}
              alt="zeeh-logo"
              width={60}
              height={60}
            />
            <h6>The future of finance is here!</h6>
          </div>

          <div className={Style.Footer_box_box_product}>
            <h3>Product</h3>
            <p>Authentication</p>
            <p>KYC Verification</p>
            <p>Connect</p>
            <p>Statement Pages</p>
            <p>Direct Debit</p>
            <p>Universal Card</p>
          </div>

          <div className={Style.Footer_box_box_product}>
            <h3>Resources</h3>
            <p>API Docs</p>
            <p>Libraries and SDKs</p>
            <p>Demo</p>
            <p>Join Slack</p>
          </div>

          <div className={Style.Footer_box_box_product}>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Coverage</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>

          <div className={Style.Footer_box_box_product}>
            <h3>Legal</h3>
            <p>Developer Policy</p>
            <p>Privacy Policy</p>
            <p>End-user Policy</p>
            <p>Term of Use</p>
            <p>Statement</p>
            <p>Cookies</p>
            <p>Security</p>
          </div>
        </div>

        <div className={Style.Footer_box_box_down}>
          <p>© All rights reserved, Zeeh Africa 2022</p>
          <div className={Style.Footer_box_box_down_socials}>
            <AiOutlineLinkedin
              className={Style.Footer_box_box_down_socials_icon}
            />
            <AiOutlineTwitter
              className={Style.Footer_box_box_down_socials_icon}
            />
            <AiOutlineInstagram
              className={Style.Footer_box_box_down_socials_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
