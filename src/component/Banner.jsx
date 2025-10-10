import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.backgroundSection}>
        <img 
          src="./images/home-intro-background.png" 
          alt="Background" 
          className={styles.backgroundImage}
        />
        
        {/* Dotted Line Element */}
        <div className={`HomePage intro-content-desktop ${styles.dottedLineWrap} animated`}>
          <svg className="dotted-line" width="100%" height="100%">
            <line x1="0" y1="50%" x2="100%" y2="50%" />
          </svg>
        </div>
        
        {/* Animated Icons Layer */}
        <div className={styles.iconsContainer}>
          <img 
            src="./images/home-intro-icons.png" 
            alt="Decorative Icons" 
            className={styles.iconsImage}
          />
          
          {/* Additional floating elements for extra visual interest */}
          <div className={styles.floatingElement1}></div>
          <div className={styles.floatingElement2}></div>
          <div className={styles.floatingElement3}></div>
        </div>
        
        {/* Content Overlay */}
        {/* <div className={styles.contentOverlay}>
          <h1 className={styles.mainTitle}>Welcome to Our World</h1>
          <p className={styles.subtitle}>Discover amazing experiences</p>
          <button className={styles.ctaButton}>Explore Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;