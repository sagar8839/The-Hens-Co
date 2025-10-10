import React from "react";
import styles from "./Locator.module.css";
import { Link } from "react-router-dom";

const Locator = () => {
  return (
    <>
   
    
    <section className={styles.locator}>
      <div className={styles.content}>
      
        <h2>store locator</h2>
        <p>Find Happy Egg Products Near You!</p>
         <Link to = "https://hens-co-egg.vercel.app/"   target="_blank" > <button className={styles.btn}>Find Happy Egg Near Me</button> </Link>
      </div>

    

      {/* Decorative Images */}
      <img
        src="./images/burger.webp"
        alt="egg burger"
        className={`${styles.decor} ${styles.topLeft}`}
      />
      <img
        src="./images/white.webp"
        alt="brown egg"
        className={`${styles.decor} ${styles.bottomLeft}`}
      />
      <img
        src="./images/white.webp"
        alt="blue egg"
        className={`${styles.decor} ${styles.topRight}`}
      />
      <img
        src="./images/vb.png"
        alt="hen"
        className={`${styles.decor} ${styles.bottomRight}`}
      />
    </section>
    </>
  );
};

export default Locator;
