import React, { useEffect, useRef } from "react";
import styles from "./wrap.module.css";

const Wrap = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // const handleScroll = () => {
    //   if (imageRef.current) {
    //     const scrolled = window.pageYOffset;
    //     const rate = scrolled * -0.3;
    //     imageRef.current.style.transform = `translateY(${rate}px) scale(${1 + Math.abs(rate * 0.001)})`;
    //   }
    // };

    
  }, []);

  return (
    <section className={styles.wrap}>
      {/* Animated background elements */}
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      
      {/* Floating particles */}
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.titleMain}>Taste the difference</span>
          <span className={styles.titleGlow}>Taste the difference</span>
        </h2>

         <imng src="/_resources/themes/happyegg/images/yolk-comparison-scale.png?m=1735173834"/> 
         <img src="./images/scale.png"/>
        
        <p className={styles.subtitle}>
          A quality you can see. A difference you can taste.
        </p>

        <div className={styles.imageContainer}>
          <img
            ref={imageRef}
            src="./images/omlate.webp"
            alt="Yolk comparison"
            className={styles.centerImage}
          />
          <div className={styles.imageGlow}></div>
        </div>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          <span>Discover More</span>
          <div className={styles.buttonSparkle}></div>
        </button>
      </div>

      {/* Wave separator */}
      <div className={styles.wave}></div>
    </section>
  );
};

export default Wrap;