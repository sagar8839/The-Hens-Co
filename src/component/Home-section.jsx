// import React, { useState, useEffect } from "react";
import styles from "./home-section.module.css";

const HomeSection = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const totalSlides = 4;

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //   }, 4000);

  //   return () => clearInterval(timer);
  // }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  // };

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  // Generate floating particles
  const renderParticles = () => {
    return Array.from({ length: 15 }).map((_, i) => (
      <div
        key={i}
        className={styles.particle}
        style={{
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${Math.random() * 10 + 10}s`,
        }}
      />
    ));
  };

  return (
    <section className={styles.homeSection}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <div className={styles.particles}>
          {renderParticles()}
        </div>
        
        {/* Floating egg decorations */}
        <div className={styles.eggFloat}>🥚</div>
        <div className={styles.eggFloat}>🍳</div>
        <div className={styles.eggFloat}>🐔</div>
        <div className={styles.eggFloat}>🥚</div>
        
        <h2>
          The Hens Co. <br />  
        </h2>
        <p>
          At Happy Egg, we believe the best free range, organic and pasture-raised
          eggs come from happy hens and caring family farmers. Our hens enjoy
          healthy outdoor lifestyles, resulting in tasty orange yolks and rich
          flavor you can taste in every meal.
        </p>
        <button className={styles.ctaButton}>Discover Our Eggs</button>
      </div>

      {/* Image Grid */}
      <div className={styles.imageGrid}>
        <img src="/images/amle.webp" alt="Fried Egg" className={styles.img1} />
        <img src="/images/vbhen.png" alt="Hen Outside" className={styles.img2} />
        <img src="/images/white.webp" alt="Boiled Egg" className={styles.img3} />
        <img src="/images/dish.webp" alt="Egg Dish" className={styles.img4} />
      </div>

      {/* Enhanced Curved Product Section with Slider */}
      {/* <div className={styles.curvedSection}>
        <div className={styles.particles}>
          {renderParticles()}
        </div>
        
        <div className={styles.sliderContainer}>
          <button className={`${styles.sliderArrow} ${styles.prev}`} onClick={prevSlide}>
            ‹
          </button>
          
          <div 
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            <div className={`${styles.card} ${styles.red}`}>
              <img src="/images/kids.png" alt="Pasture Raised" />
              <h3>Kids Egg</h3>
              <p>Free-range lifestyle & stronger yolks</p>
            </div>
            <div className={`${styles.card} ${styles.green}`}>
              <img src="/images/womm.png" alt="Organic Free Range" />
              <h3>Womens Egg</h3>
              <p>100% Certified Organic, Non-GMO feed</p>
            </div>
            <div className={`${styles.card} ${styles.blue}`}>
              <img src="/images/thirty.png" alt="Heritage" />
              <h3>Box of 30 Eggs</h3>
              <p>Unique White & speckled shells</p>
            </div>
            <div className={`${styles.card} ${styles.orange}`}>
              <img src="/images/6.png" alt="Free Range" />
              <h3>Box of 6 Eggs</h3>
              <p>Fresh free-range eggs with orange yolks</p>
            </div>
          </div>

          <button className={`${styles.sliderArrow} ${styles.next}`} onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className={styles.sliderNav}>
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`${styles.sliderDot} ${currentSlide === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div> */}
    </section>

  );
};

export default HomeSection;