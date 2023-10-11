import React from "react";
import styles from "./SiteFooter.module.scss";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";
import inst from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";
import tiktok from "../../assets/tiktok.png";
import linkedin from "../../assets/In.png";

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainInformationBlock}>
        <h2 className={styles.email}>team@vnv.solutions</h2>
        <div className={styles.line}></div>
        <h3 className={styles.address}>
          Karla Miklʹosha, 7<br />
          Lviv, Ukraine
        </h3>
      </div>
      <div className={styles.socialMedia}>
        <SocialMediaIcon
          img={inst}
          href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
          socialMediaName="Instagram"
        />
        <SocialMediaIcon
          img={facebook}
          href="https://www.facebook.com/profile.php?id=100088433736254"
          socialMediaName="Facebook"
        />
        <SocialMediaIcon
          img={telegram}
          href="https://t.me/vnv_solutions"
          socialMediaName="Telegram"
        />
        <SocialMediaIcon
          img={tiktok}
          href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
          socialMediaName="TikTok"
        />
        <SocialMediaIcon
          img={linkedin}
          href="https://www.linkedin.com/company/vnv-tech/"
          socialMediaName="Linkedin"
        />
      </div>
    </footer>
  );
};

export default SiteFooter;
