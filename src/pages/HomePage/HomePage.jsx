import React from "react";
import styles from "./HomePage.module.scss";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import WhyUsBlock from "../../components/WhyUsBlock/WhyUsBlock";
import SiteFooter from "../../components/SiteFooter/SiteFooter";
import ContactUsFrom from "../../components/ContactUsFrom/ContactUsFrom";
import BriefInformation from "../../components/BriefInformation/BriefInformation";
import FAQ from "../../components/FAQ/FAQ";
import CompanyServices from "../../components/CompanyServices/CompanyServices";
import MainTitle from "../../components/MainTitle/MainTitle";
import GetDiscount from "../../components/GetDiscount/GetDiscount";
import LeadMagnet from "../../components/LeadMagnet/LeadMagnet";
import offer from "../../assets/offer.png";
import OurProjects from "../../components/OurProjects/OurProjects";
const HomePage = () => {
  return (
    <div className={styles.layout}>
      <SiteHeader />
      <MainTitle />
      <WhyUsBlock />
      <CompanyServices />
      <OurProjects />
      <ContactUsFrom />
      <BriefInformation />
      <FAQ />
      <SiteFooter />
      <LeadMagnet img={offer}>
        <GetDiscount />
      </LeadMagnet>
    </div>
  );
};

export default HomePage;
