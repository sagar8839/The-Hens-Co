import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";

// Import social media icons (you'll need to install react-icons)
import { FaInstagram, FaFacebookF, FaTiktok, FaPinterestP, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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
              <li><span className={styles.linkItem}>Products</span></li>
              <li><span className={styles.linkItem}>Our Farms</span></li>
              <li><span className={styles.linkItem}>Become a Farmer</span></li>
              <li><span className={styles.linkItem}>About</span></li>
              <li><span className={styles.linkItem}>Blog</span></li>
              <li><span className={styles.linkItem}>Store Locator</span></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Our Eggs</h3>
            <ul>
              <li><span className={styles.linkItem}>Heritage</span></li>
              <li><span className={styles.linkItem}>Pasture Raised</span></li>
              <li><span className={styles.linkItem}>Organic Free Range</span></li>
              <li><span className={styles.linkItem}>Free Range</span></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h3 className={styles.linkTitle}>Support</h3>
            <ul>
              <li><span className={styles.linkItem}>FAQs</span></li>
              <li><span className={styles.linkItem}>Careers</span></li>
              <li><span className={styles.linkItem}>Press</span></li>
              <li><span className={styles.linkItem}>Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Right Section with Actual Social Media Icons */}
        <div className={styles.right}>
          <div className={styles.socials}>
            <h3 className={styles.socialTitle}>Follow the Flock</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="TikTok">
                <FaTiktok className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Pinterest">
                <FaPinterestP className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <FaYoutube className={styles.icon} />
                <div className={styles.iconHover}></div>
              </a>
            </div>
          </div>
          
          <button className={styles.btn}>
            <span className={styles.btnText}>Buy Now</span>
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
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}>Terms of Use</a>
          </div>
          <p className={styles.credit}>Crafted with ❤️ by   Sagar Gupta  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;