import React from "react";
import Image from "next/image";

import Style from "./Boxes.module.css";
import box1 from "../../public/box1.svg";
import box2 from "../../public/box2.svg";
import box3 from "../../public/box3.svg";
import box4 from "../../public/box4.svg";
import box5 from "../../public/box5.svg";

const Boxes = () => {
  return (
    <div className={Style.Boxes}>
      <div className={Style.Boxes_box}>
        <h2>WHY ZEEH</h2>
        <h3>We tick all the boxes</h3>

        <div className={Style.Boxes_box_square}>
          <div className={Style.Boxes_box_square_box}>
            <Image
              className={Style.Boxes_box_square_box_img1}
              src={box1}
              alt="laptop"
              width={172}
              height={144}
            />
            <h4>Easy Access</h4>
            <p>
              You have full access to quality financial data without any program
              or code
            </p>
          </div>

          <div className={Style.Boxes_box_square_box}>
            <Image
              className={Style.Boxes_box_square_box_img2}
              src={box2}
              alt="card"
              width={140}
              height={94}
            />
            <h4>Swift payment</h4>
            <p>Zeeh ensures instantly confirmed bank-to-bank payment</p>
          </div>

          <div className={Style.Boxes_box_square_box}>
            <Image
              className={Style.Boxes_box_square_box_img3}
              src={box3}
              alt="phone-rays"
              width={144}
              height={120}
            />
            <h4>Prompt Response</h4>
            <p>
              Our customer services are available 24/7 with a high ‘prompt
              response’ rate
            </p>
          </div>

          <div className={Style.Boxes_box_square_box}>
            <Image
              className={Style.Boxes_box_square_box_img4}
              src={box4}
              alt="laptop"
              width={120}
              height={120}
            />
            <h4>Guaranteed security</h4>
            <p>Client data and log in information are encrypted and private</p>
          </div>
        </div>

        <div className={Style.Boxes_box_award}>
          <div className={Style.Boxes_box_award_circle}>
            <Image
              className={Style.Boxes_box_award_circle_img}
              src={box5}
              alt="award"
              width={92}
              height={157}
            />
          </div>

          <div className={Style.Boxes_box_award_details}>
            <h4>2022</h4>
            <h5>Fastest growing open banking API of the year</h5>
            <p>Nigeria Business Leadership Award</p>
            <h1>Infra That Just Works</h1>
            <div className={Style.Boxes_box_award_details_button}>
              {" "}
              <button>Get Started</button>
              <h6>Book a Demo</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
