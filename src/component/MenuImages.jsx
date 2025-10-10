import { useState, useEffect } from 'react';
import styles from "./MenuImage.module.css";

const MenuImages = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const images = [
    {
      src: "./images/kid.jpg",
      alt: "Kids Eggs",
      description: "🧒 Perfect for Growing Kids • High in Protein & Omega-3 • Supports Brain Development • Fun & Healthy"
    },
    {
      src: "./images/women.jpg", 
      alt: "Women Eggs",
      description: "💁‍♀️ Essential for Women's Health • Rich in Iron & Vitamin D • Supports Bone Strength • Natural Energy Boost"
    },
    {
      src: "./images/thirty.jpg",
      alt: "Freshness Eggs", 
      description: "⭐ 30-Day Freshness Guarantee • Farm to Table • Natural & Organic • Premium Quality Assurance"
    },
    {
      src: "./images/6egg.jpg",
      alt: "Premium Eggs",
      description: "👑 Golden Yolk Excellence • Free-Range Hens • Superior Taste • Award-Winning Quality"
    }
  ];

  return (
    <div className={`${styles.menuImages} ${loaded ? styles.loaded : ''}`}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img 
            src={image.src} 
            alt={image.alt}
            loading="lazy"
            decoding="async"
            onLoad={() => console.log(`${image.alt} loaded successfully`)}
            onError={(e) => {
              console.error(`Failed to load ${image.alt}`);
              e.target.style.display = 'none';
            }}
          />
          <div className={styles.imageOverlay}>
            <p className={styles.imageDescription}>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuImages;