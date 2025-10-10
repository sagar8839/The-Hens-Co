import React from "react";
import styles from "./Download.module.css";
import qr1 from "/images/android.png";
import qr2 from "/images/apple.png";
import playstore from "/public/images/google.png";
import appstore from "/public/images/app.png";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section className={styles.downloadSection}>
      <div className={styles.animatedBackground}>
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>
      
      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* Animated Header */}
          <div className={styles.headerContainer}>
            <h2 className={styles.mainTitle}>
              Jabalpur's very own young startup –{" "}
              <span className={styles.highlight}>The Hens Co.</span>
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>

          {/* Social Media Section */}
          <div className={styles.socialSection}>
            <p className={styles.subtext}>
              Follow us on Instagram & Facebook{" "}
              <span className={styles.socialHandle}>@TheHensCo</span> for
              delicious updates.
            </p>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}>📷</div>
              <div className={styles.socialIcon}>👍</div>
            </div>
          </div>

          {/* Main Description */}
          <div className={styles.descriptionBox}>
            <p className={styles.text}>
              Download our app and step over to our online shop, and place an
              order for farm fresh produce to be delivered to your doorstep at the
              click of a button!
            </p>
          </div>

          {/* QR Codes Section */}
          <div className={styles.qrSection}>
            <h3 className={styles.qrTitle}>Scan to Download</h3>
            <div className={styles.qrContainer}>
              <div className={styles.qrCard}>
                <div className={styles.qrPlatform}>Android</div>
                <img src={qr1} alt="Android QR Code" className={styles.qr} />
                <div className={styles.qrLabel}>Scan for Android</div>
              </div>
              
              <div className={styles.qrCard}>
                <div className={styles.qrPlatform}>iOS</div>
                <img src={qr2} alt="iOS QR Code" className={styles.qr} />
                <div className={styles.qrLabel}>Scan for iPhone</div>
              </div>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className={styles.storeSection}>
            <h3 className={styles.storeTitle}>Or Download Directly</h3>
            <div className={styles.storeButtons}>
              <div className={styles.storeButton}>
                <img 
                  src={playstore} 
                  alt="Google Play" 
                  className={styles.storeImage}
                />
                <div className={styles.storeText}>
                  <span className={styles.getOn}>
                   <Link to ="https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://play.google.com/store/apps/details?id%3Dcom.the.hens&followup=https://play.google.com/store/apps/details?id%3Dcom.the.hens&authuser=0"> 
                   GET IT ON </Link></span>
                  <span  className={styles.storeName}>   <Link to ="https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://play.google.com/store/apps/details?id%3Dcom.the.hens&followup=https://play.google.com/store/apps/details?id%3Dcom.the.hens&authuser=0"> Google Play </Link></span> 
                </div>
              </div>
              
              <div className={styles.storeButton}>
                <img 
                  src={appstore} 
                  alt="App Store" 
                  className={styles.storeImage}
                />
                <div className={styles.storeText}>
                  <span className={styles.downloadOn}>
                    <Link to ="https://qrgo.page.link/vUvJ5">
                    Download on the </Link> </span>
                  <span className={styles.storeName}>       <Link to ="https://qrgo.page.link/vUvJ5"> App Store </Link> </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className={styles.contactSection}>
            <button className={styles.learnMore}>
              <Link to="/contact" className={styles.contactLink}>
                <span className={styles.buttonText}>Contact Us</span>
                <span className={styles.buttonIcon}>→</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;