import React from "react";
import NavBar from "../Navbar/NavBar";
import FooterMain from "../FooterMain/FooterMain";
import styles from "./MainPage.module.css";
import InfoMainCard from "../InfoCard/InfoMainCard";
import SecondSection from "../InfoCard/SecondSection";
import AboutUs from "../InfoCard/AboutUs";

export default function MainPage() {
  const navLinks = [
    { text: "Login", linkUrl: "/loginPage" },
    { text: "Register", linkUrl: "/registerPage" },
  ];

  return (
    <div className={styles["page-style"]}>
      <NavBar links={navLinks}></NavBar>
      <InfoMainCard></InfoMainCard>
      {/* <SecondSection></SecondSection>
			<AboutUs></AboutUs> */}
      <FooterMain></FooterMain>
    </div>
  );
}
