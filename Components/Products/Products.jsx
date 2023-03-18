import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

import Style from "./Products.module.css";
import prod1 from "../../public/prod1.svg";
import prod2 from "../../public/prod2.svg";
import prod3 from "../../public/prod3.svg";
import prod4 from "../../public/prod4.svg";
import prod5 from "../../public/prod5.svg";
import prod6 from "../../public/prod6.svg";
import prod7 from "../../public/prod7.svg";

const Products = () => {
  return (
    <div className={Style.Products}>
      <div className={Style.Products_box}>
        <h2>OUR DATA PRODUCTS</h2>
        <h3>Data Infra</h3>

        <div className={Style.Products_box_slab}>
          <h3>Know Your Customer Verification</h3>
          <Image
            className={Style.Products_box_slab_img}
            src={prod1}
            alt="image"
            width={378}
            height={318}
          />
          <p>
            Verify your customer’s identity today with our KYC process. This
            ensures instant onboarding and tracking of illegal activities that
            can disrupt the overall setup of your business financial system.
            Start using our services with confidence today
          </p>
          <div className={Style.learn}>
            <h4>Learn more</h4>
            <AiOutlineArrowRight className={Style.learn_icon} />
          </div>
        </div>

        <div className={Style.Products_box_prodClass1}>
          <div className={Style.Products_box_prodClass1_connect1}>
            <h3>Connect</h3>
            <Image
              className={Style.Products_box_prodClass1_connect1_img}
              src={prod2}
              alt="image"
              width={217}
              height={235}
            />
            <p>
              Zeeh gives businesses direct interaction with their client’s banks
              making the process of saving and investment anywhere seamless for
              their customers.
            </p>
            <div className={Style.Products_box_prodClass1_connect1_learn}>
              <h4>Learn more</h4>
              <AiOutlineArrowRight
                className={Style.Products_box_prodClass1_connect1_learn_icon}
              />
            </div>
          </div>

          <div className={Style.Products_box_prodClass1_connect2}>
            <h3>Statement Pages</h3>
            <Image
              className={Style.Products_box_prodClass1_connect2_img}
              src={prod3}
              alt="image"
              width={217}
              height={235}
            />
            <p>
              get full access to your customer’s financial data and bio-data
              while onboarding to validate the identity of customers. Our
              services empowers you with good insight into your customer’s
              finances.
            </p>
            <div className={Style.Products_box_prodClass1_connect2_learn}>
              <h4>Learn more</h4>
              <AiOutlineArrowRight
                className={Style.Products_box_prodClass1_connect2_learn_icon}
              />
            </div>
          </div>
        </div>

        <h2>OUR PAYMENT PRODUCTS</h2>

        <div className={Style.payment}>
          <h3>Payment Infra</h3>{" "}
        </div>
        <div className={Style.Products_box_prodClass2}>
          <div className={Style.Products_box_prodClass2_item1}>
            <h3>Direct Debit</h3>
            <Image
              className={Style.Products_box_prodClass2_item1_img}
              src={prod4}
              alt="image"
              width={186}
              height={231}
            />
            <p>
              Zeeh gives businesses direct interaction with their client’s banks
              making the process of saving and investment anywhere seamless for
              their customers.
            </p>
            <div className={Style.Products_box_prodClass1_connect2_learn}>
              <h4>Learn more</h4>
              <AiOutlineArrowRight
                className={Style.Products_box_prodClass1_connect2_learn_icon}
              />
            </div>
          </div>

          <div className={Style.Products_box_prodClass2_item2}>
            <h3>Universal card</h3>
            <Image
              className={Style.Products_box_prodClass2_item2_img}
              src={prod5}
              alt="image"
              width={280}
              height={189}
            />
            <p>
              Get full access to your customer’s financial data and bio-data
              while onboarding to validate the identity of customers. Our
              services empowers you with good insight into your customer’s
              finances.
            </p>
            <div className={Style.Products_box_prodClass1_connect2_learn}>
              <h4>Learn more</h4>
              <AiOutlineArrowRight
                className={Style.Products_box_prodClass1_connect2_learn_icon}
              />
            </div>
          </div>
        </div>

        <h2>FOR DEVELOPERS</h2>
        <div className={Style.payment}>
          <h3>Developer-Friendly API</h3>
        </div>

        <div className={Style.Products_box_prodClass3}>
          <Image
            className={Style.Products_box_prodClass3_img1}
            src={prod6}
            alt="illustration"
            width={157}
            height={127}
          />
          <div className={Style.Products_box_prodClass3_box}>
            <div>
              <h3>For Developer, by Developer</h3>
              <p>
                Providing a personalized experience for users. through
                Interoperable and customizable Products that can work seamlessly
                , enabling smooth integration and data exchange.
              </p>
            </div>
            <Image
              className={Style.Products_box_prodClass3_img2}
              src={prod7}
              alt="illustration"
              width={512}
              height={371}
            />
          </div>

          <div className={Style.Products_box_prodClass3_explore}>
            <h4>Explore Our Docs</h4>
            <AiOutlineArrowRight
              className={Style.Products_box_prodClass3_explore_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
