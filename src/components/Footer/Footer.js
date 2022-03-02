import React from "react";
import useStyles from "./Style";
import InstagramIcon from "../../assets/images/IG.png";
import FacebookIcon from "../../assets/images/FB.png";
import TwitterIcon from "../../assets/images/TW.png";
import TelegramIcon from "../../assets/images/TL.png";
import MetaFlokiRush from "../../assets/images/MetaFlokiRush.png";
import BG2 from "../../assets/images/bg2.svg";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.__footerContainer}>
        <img src={BG2} className={classes.bg} alt="background image" />
        <img className={classes.footerImage} src={MetaFlokiRush} alt="cartoon image" />
        <div className={classes.content}>
          <div className={classes.footerContent}>
            <div className={classes.footer_text0}>
              <h1 className={classes.heading}> CURIOUS? GET IN TOUCH</h1>
              <div className={classes.para}>We’d love to hear your thoughts, let us know, we'll get in touch!</div>
            </div>
            {/* <div className={classes.footer_text1}>
              <h1 className={classes.heading}> INFO</h1>
              <div className={classes.para}>Terms & Conditions </div>
            </div> */}
            <div className={classes.footer_text2}>
              <h1 className={classes.heading}> FOLLOW US</h1>
              <div className={classes.contect_Icons}>
                <img
                  onClick={() => window.open("https://instagram.com/metaflokirush", "__blank")}
                  src={InstagramIcon}
                  className={classes.__contactIcon}
                  alt="Instagram Icon"
                />
                <img
                  onClick={() => window.open("https://twitter.com/metaflokirush", "__blank")}
                  src={TwitterIcon}
                  className={classes.__contactIcon}
                  alt="TwitterIcon"
                />
                <img
                  onClick={() => window.open("https://t.me/metaflokirush", "__blank")}
                  src={TelegramIcon}
                  className={classes.__contactIcon}
                  alt="Telegram Icon"
                />
              </div>
            </div>
            <div className={classes.footer_text3}>
              <h1 className={classes.heading}> CONTACT US</h1>
              <div className={classes.para}>support@metaflokirush.com</div>
            </div>
          </div>
          <div className={classes.__footerContents}>
            <span>Copyright © 2022 FlokiRush. All Right Reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
