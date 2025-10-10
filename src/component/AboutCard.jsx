import styles from "./aboutcard.module.css";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AboutCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      sticker: "🏆",
      title: "Farm-Fresh Quality",
      text: "Our eggs come directly from carefully raised hens on our farm."
    },
    {
      sticker: "🔍",
      title: "Stringent Quality Control",
      text: "At The Hen's Company, quality is our top priority."
    },
    {
      sticker: "🌿",
      title: "Organic, Hygienic Feed",
      text: "Our hens are fed organic, hygienic, and wholesome feed."
    },
    {
      sticker: "❤️",
      title: "Our Passion for Eggs",
      text: "At The Hen's Company, we're a family of 'egg-thusiasts'!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.floatingEggs}></div>
      
      <h2 className={styles.heading}>Why Choose Our Eggs</h2>
      
      <div className={styles.slideshowContainer}>
        <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        
      // Update the slide mapping in your React component
{slides.map((slide, index) => (
  <div
    key={index}
    className={`${styles.slide} ${
      index === currentSlide
        ? styles.active
        : index === (currentSlide - 1 + slides.length) % slides.length
        ? styles.prev
        : index === (currentSlide + 1) % slides.length
        ? styles.next
        : ""
    }`}
  >
    <span className={styles.sticker}>{slide.sticker}</span>
    <h3 className={styles.slideTitle}>{slide.title}</h3>
    <p className={styles.slideText}>{slide.text}</p>
    {index === currentSlide && <div className={styles.progressBar}></div>}
  </div>
))}
        
        <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.navigationDots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutCard;