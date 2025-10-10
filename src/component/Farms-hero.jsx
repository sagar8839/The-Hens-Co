import React from "react";
import styles from "./FarmsHero.module.css";

const FarmsHero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="./video/farms-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.wave}></div>
    </section>
  );
};

export default FarmsHero;
