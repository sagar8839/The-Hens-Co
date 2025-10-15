import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";

// Import social media icons (you'll need to install react-icons)
import { FaInstagram, FaFacebookF, FaTiktok, FaPinterestP, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className={`${styles.footer} ${isVisible ? styles.visible : ""}`}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingEgg}></div>
        <div className={styles.floatingEgg}></div>
        <div className={styles.floatingEgg}></div>
      </div>

      {/* Animated Wave Section */}
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

      <div className={styles.content}>
        {/* Logo Section with Animation */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <h2 className={styles.logo}>
              <span className={styles.logoPart}>The Hens</span>
              <span className={styles.logoPart}>Co.</span>
            </h2>
            <div className={styles.logoUnderline}></div>
          </div>
          <p className={styles.tagline}>Farm Fresh Happiness in Every Bite</p>
        </div>

        {/* Links Section with Hover Effects */}
        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Explore</h3>
            <ul>
              <li><span className={styles.linkItem}> <Link to="/products">  Products </Link></span></li>
              <li><span className={styles.linkItem}> <Link to="/our-farms"> Our Farms </Link> </span></li>
              {/* <li><span className={styles.linkItem}>Become a Farmer</span></li> */}
              <li><span className={styles.linkItem}> <Link to="/about"> About </Link></span></li>
              <li><span className={styles.linkItem}><Link to="/team"> Teams </Link></span></li>
              <li><span className={styles.linkItem}> <Link to ="https://hens-co-egg.vercel.app/"> Store Locator </Link> </span></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Our Eggs</h3>
            <ul>
              <li><span className={styles.linkItem}> <Link to="/women"> Women </Link> </span></li>
              <li><span className={styles.linkItem}> <Link to="/kids"> Kids </Link> </span></li>
              <li><span className={styles.linkItem}> <Link to="/eggs"> Thrity Egg Box </Link> </span></li>
              <li><span className={styles.linkItem}> <Link to="/egg"> Six Egg Box </Link> </span></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Support</h3>
            <ul>
              <li><span className={styles.linkItem}> <Link to ="/faq"> FAQs </Link> </span></li>
              {/* <li><span className={styles.linkItem}>Careers</span></li>
              <li><span className={styles.linkItem}>Press</span></li> */}
              <li><span className={styles.linkItem}> <Link to="/contact"> Contact </Link>  </span></li>
            </ul>
          </div>
        </div>

        {/* Right Section with Actual Social Media Icons */}
        <div className={styles.right}>
          <div className={styles.socials}>
            <h3 className={styles.socialTitle}>Follow the Flock</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/thehensco?igsh=MWx1b2wxbmJidjMxag==" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="https://www.facebook.com/share/1HKQorWYjM/?mibextid=wwXIfr" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              {/* <a href="#" className={styles.socialIcon} aria-label="TikTok">
                <FaTiktok className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Pinterest">
                <FaPinterestP className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a> */}
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              {/* <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <FaYoutube className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a> */}
            </div>
          </div>
          
          <button className={styles.btn}>
            <span className={styles.btnText}> <Link to="https://hens-co-egg.vercel.app/"> Stores </Link>
            
            
            
            
             </span>
            <div className={styles.btnHover}></div>
            <div className={styles.btnSparkle}></div>
          </button>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>© {new Date().getFullYear()} The Hens Co. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}> <Link to="/privacy"> Privacy Policy </Link> </a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}> <Link to="/terms-conditon"> Terms & Conditions </Link> </a>
          </div>
          <p className={styles.credit}>Crafted with ❤️ by   Sagar Gupta  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;