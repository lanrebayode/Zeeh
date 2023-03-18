import React from "react";
import Image from "next/image";

import Style from "./HeroSection.module.css";
import file from "../../public/file.svg";

const HeroSection = () => {
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <h1>Access Customers Data With No Code</h1>
        <p>
          A well-designed data infrastructure can help you implement all the
          neccessary security measures, such as encryption, access controls and
          monitoring.
        </p>
        <div className={Style.HeroSection_box_started}>
          <button>Get Started</button>
          <h4>Book a Demo</h4>
        </div>
        <Image
          className={Style.HeroSection_box_img}
          src={file}
          alt="file-image"
          width={400}
          height={600}
        />
      </div>
    </div>
  );
};

export default HeroSection;
