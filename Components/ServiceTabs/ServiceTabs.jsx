import React from "react";
import Image from "next/image";

import Style from "./ServiceTabs.module.css";
import tab1 from "../../public/tab1.svg";
import tab2 from "../../public/tab2.svg";
import tab3 from "../../public/tab3.svg";
import tab4 from "../../public/tab4.svg";
import tab5 from "../../public/tab5.svg";
import tab6 from "../../public/tab6.svg";

const ServiceTabs = () => {
  return (
    <div className={Style.ServiceTabs}>
      <div className={Style.ServiceTabs_box}>
        <h2>PEOPLE USE OUR DATA INFRASTRUCTURE TO BUILD PRODUCTS IN</h2>

        <div className={Style.ServiceTabs_box_tabs}>
          <div className={Style.ServiceTabs_box_tabs_tab1}>
            <h3>Personal finance</h3>
            <Image
              className={Style.ServiceTabs_box_tabs_tab1_img}
              src={tab1}
              alt="img"
              width={230}
              height={224}
            />
            <p>
              Streamline your data collection, management, and analysis
              processes, which can lead to significant efficiency gains and cost
              savings.{" "}
            </p>
          </div>

          <div className={Style.ServiceTabs_box_tabs_tab2}>
            <h3>Consumer Payment</h3>
            <Image
              className={Style.ServiceTabs_box_tabs_tab2_img}
              src={tab2}
              alt="img"
              width={293}
              height={253}
            />
            <p>
              Streamline your data collection, management, and analysis
              processes, which can lead to significant efficiency gains and cost
              savings.
            </p>
          </div>

          <div className={Style.ServiceTabs_box_tabs_tab3}>
            <h3>Digital Banking</h3>
            <Image
              className={Style.ServiceTabs_box_tabs_tab3_img}
              src={tab3}
              alt="img"
              width={262}
              height={276}
            />
            <p>
              Streamline your data collection, management, and analysis
              processes, which can lead to significant efficiency gains and cost
              savings.
            </p>
          </div>

          <div className={Style.ServiceTabs_box_tabs_tab4}>
            <h3>Lending & Insurance</h3>
            <Image
              className={Style.ServiceTabs_box_tabs_tab4_img}
              src={tab4}
              alt="img"
              width={209}
              height={280}
            />
            <p>
              Streamline your data collection, management, and analysis
              processes, which can lead to significant efficiency gains and cost
              savings.
            </p>
          </div>

          <div className={Style.ServiceTabs_box_tabs_tab5}>
            <h3>Savings&nbsp; & Investment</h3>
            <Image
              className={Style.ServiceTabs_box_tabs_tab5_img}
              src={tab5}
              alt="img"
              width={183}
              height={203}
            />
            <p>
              Streamline your data collection, management, and analysis
              processes, which can lead to significant efficiency gains and cost
              savings.
            </p>
          </div>

          <div className={Style.ServiceTabs_box_tabs_tab6}>
            <h3>Open Finance</h3>
            <Image
              className={Style.ServiceTabs_box_tabs_tab6_img}
              src={tab6}
              alt="img"
              width={432}
              height={237}
            />
            <p>
              Streamline your data collection, management, and analysis
              processes, which can lead to significant efficiency gains and cost
              savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
