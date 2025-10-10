import React from "react";
import styles from "./Happy.module.css";

const Happy = () => {
  return (
    <div className={styles.container}>
      {/* Floating images */}
      <img
        src="./images/egg.png"
        alt="eggs"
        className={`${styles.floatingImg} ${styles.img1}`}
      />
      <img
        src="./images/bf.jpg"
        alt="breakfast"
        className={`${styles.floatingImg} ${styles.img2}`}
      />
      <img
        src="./images/farm.jpg"
        alt="farm"
        className={`${styles.floatingImg} ${styles.img3}`}
      />
      <img
        src="./images/meals.webp"
        alt="chickens"
        className={`${styles.floatingImg} ${styles.img4}`}
      />
      {/* <img
        src="./images/meals.webp"
        alt="meals"
        className={`${styles.floatingImg} ${styles.img5}`}
      /> */}

      {/* Main Text */}
      <h1 className={styles.title}>
        <span className={styles.orange}>Add some happy</span>
        <br />
        <span className={styles.white}>to your day</span>
      </h1>
    </div>
  );
};

export default Happy;
