import React from "react";
import styles from "./FarmsMap.module.css";

const FarmsMap = () => {
  return (
    <section className={styles.mapSection}>
      {/* Start Wave */}
      <div className={`${styles.wave} ${styles.waveTop}`}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Left Text Box */}
        <div className={styles.textBox}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Heartland <span className={styles.highlight}>of Happy</span>
            </h2>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🌱</div>
                <p>
                  We support small family farmers by offering them a better contract
                  so they can focus on the birds, not the checkbook.
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🏡</div>
                <p>
                  Today, we have <span className={styles.accent}>100+</span> small family farms located throughout the
                  Midwest; or as we like to call it, the Heartland of Happy.
                </p>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🐔</div>
                <p>
                  Our hens require a minimum of <span className={styles.accent}>21.8 square feet</span> of range for every
                  bird, which equates to <span className={styles.accent}>10 acres</span> per 20,000 birds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map */}
        <div className={styles.mapBox}>
          <div className={styles.mapContainer}>
            <img 
              src="./images/fermMap.webp" 
              alt="Farm locations throughout the Midwest showing our network of small family farms"
              className={styles.mapImage}
            />
            <div className={styles.mapOverlay}></div>
            <div className={styles.floatingIcons}>
              <div className={styles.icon} style={{top: '30%', left: '25%'}}>🌾</div>
              <div className={styles.icon} style={{top: '50%', left: '60%'}}>🏡</div>
              <div className={styles.icon} style={{top: '70%', left: '40%'}}>🐓</div>
            </div>
          </div>
        </div>
      </div>

      {/* End Wave */}
      <div className={`${styles.wave} ${styles.waveBottom}`}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  );
};

export default FarmsMap;