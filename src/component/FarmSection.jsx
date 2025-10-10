import React, { useEffect, useRef, useState } from "react";
import styles from "./FarmSection.module.css";

const FarmSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Counter values
  const [farmCount, setFarmCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [henCount, setHenCount] = useState(0);
  const [acreCount, setAcreCount] = useState(0);
  const [totalAcreCount, setTotalAcreCount] = useState(0);

  // Final values
  const finalValues = {
    farms: 180,
    space: 21.8,
    hens: 20000,
    acres: 8,
    totalAcres: 824
  };

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      // Farm counter
      let farmStep = 0;
      const farmInterval = setInterval(() => {
        farmStep++;
        const progress = farmStep / steps;
        const currentValue = Math.floor(finalValues.farms * progress);
        setFarmCount(currentValue);
        if (farmStep >= steps) clearInterval(farmInterval);
      }, stepDuration);

      // Space counter
      let spaceStep = 0;
      const spaceInterval = setInterval(() => {
        spaceStep++;
        const progress = spaceStep / steps;
        const currentValue = Number((finalValues.space * progress).toFixed(1));
        setSpaceCount(currentValue);
        if (spaceStep >= steps) clearInterval(spaceInterval);
      }, stepDuration);

      // Hen counter
      let henStep = 0;
      const henInterval = setInterval(() => {
        henStep++;
        const progress = henStep / steps;
        const currentValue = Math.floor(finalValues.hens * progress);
        setHenCount(currentValue);
        if (henStep >= steps) clearInterval(henInterval);
      }, stepDuration);

      // Acres counter
      let acreStep = 0;
      const acreInterval = setInterval(() => {
        acreStep++;
        const progress = acreStep / steps;
        const currentValue = Math.floor(finalValues.acres * progress);
        setAcreCount(currentValue);
        if (acreStep >= steps) clearInterval(acreInterval);
      }, stepDuration);

      // Total acres counter
      let totalAcreStep = 0;
      const totalAcreInterval = setInterval(() => {
        totalAcreStep++;
        const progress = totalAcreStep / steps;
        const currentValue = Math.floor(finalValues.totalAcres * progress);
        setTotalAcreCount(currentValue);
        if (totalAcreStep >= steps) clearInterval(totalAcreInterval);
      }, stepDuration);

      return () => {
        clearInterval(farmInterval);
        clearInterval(spaceInterval);
        clearInterval(henInterval);
        clearInterval(acreInterval);
        clearInterval(totalAcreInterval);
      };
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.title}>
        our farms – the heartland of <span>happy</span>
      </h2>

      <div className={styles.content}>
        <div className={styles.imageBox}>
          <img 
            src="./images/egg-frame.webp" 
            alt="Farmer with Hen" 
            className={styles.image}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        <div className={styles.textBox}>
          <h3 className={styles.subtitle}>
            partnering with <span>caring family farms</span>
          </h3>
          <p className={styles.description}>
            Happy Egg Co. collaborates with over 180 caring family farms across
            the Midwest—our "Heartland of Happy"—to produce high-quality, free
            range eggs. Each hen enjoys 21.8 square feet of pasture, promoting
            natural behaviors and resulting in eggs with tasty orange yolks.
          </p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h4 className={styles.statNumber}>
            {farmCount}+
          </h4>
          <p className={styles.statLabel}>Small Family Farms</p>
        </div>
        <div className={styles.statItem}>
          <h4 className={styles.statNumber}>
            {spaceCount}
          </h4>
          <p className={styles.statLabel}>Square Feet of Outdoor Space per Bird</p>
        </div>
        <div className={styles.statItem}>
          <h4 className={styles.statNumber}>
            {henCount.toLocaleString()}
          </h4>
          <p className={styles.statLabel}>Hens per Farm</p>
        </div>
        <div className={styles.statItem}>
          <h4 className={styles.statNumber}>
            {acreCount}+
          </h4>
          <p className={styles.statLabel}>Acres of Range per Farm</p>
        </div>
        <div className={styles.statItem}>
          <h4 className={styles.statNumber}>
            {totalAcreCount}+
          </h4>
          <p className={styles.statLabel}>Total Acres of Happy Range</p>
        </div>
      </div>
    </section>
  );
};

export default FarmSection;