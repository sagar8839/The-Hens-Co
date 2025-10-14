import React, { useEffect, useRef } from "react";
import styles from "./promotion.module.css";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let start = 0;
          const increment = end / (duration / 16); // 60fps
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h3 ref={ref}>
      {count.toLocaleString()}{suffix}
    </h3>
  );
};

const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h2>
            ethical <br />
            farming. <br />
            sustainable <br />
            standards.
          </h2>
          <p>
            Our free range eggs, sourced from caring family farms, feature tasty
            orange yolks and are produced using sustainable farming methods that
            prioritize animal welfare and environmental responsibility.
          </p>
          <button className={styles.btn}>Our Farms</button>
        </div>

        <div className={styles.images}>
          <div className={styles.imgMain}>
            <img
              src="./images/vbhen.png"
              alt="chicken"
            />
          </div>
          <div className={styles.imgSmall}>
            <img
              src="./images/henwithwomen.png"
              alt="farmer"
            />
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <AnimatedCounter end={180} suffix="+" />
          <p>Small Family Farms</p>
        </div>
        <div className={styles.statItem}>
          <AnimatedCounter end={21.8} />
          <p>Square Feet of Outdoor Space per Bird</p>
        </div>
        <div className={styles.statItem}>
          <AnimatedCounter end={20000} />
          <p>Hens per Farm</p>
        </div>
        <div className={styles.statItem}>
          <AnimatedCounter end={8} suffix="+" />
          <p>Acres of Range per Farm</p>
        </div>
        <div className={styles.statItem}>
          <AnimatedCounter end={824} suffix="+" />
          <p>Total Acres of Happy Range</p>
        </div>
      </div>
    </section>
  );
};

export default Promotion;