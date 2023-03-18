import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/Components/NavBar/NavBar";
import HeroSection from "@/Components/HeroSection/HeroSection";
import ServiceTabs from "@/Components/ServiceTabs/ServiceTabs";
import Style from "../Components/HeroSection/HeroSection.module.css";
import partners from "../public/partners.png";
import Products from "@/Components/Products/Products";
import Boxes from "@/Components/Boxes/Boxes";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zeeh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Home_hero}>
        <NavBar />
        <HeroSection />
      </div>
      <Image
        className={Style.HeroSection_box_partners}
        src={partners}
        alt="partners-image"
        width={1300}
        height={100}
      />
      <ServiceTabs />
      <Products />
      <Boxes />
      <Footer />
    </>
  );
}