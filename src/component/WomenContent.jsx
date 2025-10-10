import React, { useEffect, useState } from "react";
import styles from "./WomenContent.module.css";
import eggBox from "/images/womm.png";
import yolkDish from "/images/yolks.webp";
import brownBlueEggs from "/images/vb300.png";
import { Link } from "react-router-dom";

const WomenContent = () => {
    const [protein, setProtein] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [fat, setFat] = useState(0);

  useEffect(() => {
    const animateValue = (setter, end, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
    };

    animateValue(setProtein, 6, 1000); // 6g
    animateValue(setEnergy, 70, 1500); // 70 calories
    animateValue(setFat, 0, 1000); // 0g (stays 0)
  }, []);
  return (
    <section className={styles.heroSection}>
      {/* Animated Background Waves */}
      <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>

      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>Women's Premium</span>
              <span className={styles.titleSub}>Heritage Eggs</span>
            </h1>
            <p className={styles.subtitle}>
              Nourishing eggs from our cherished <strong>VB300 heritage hens</strong>, 
              raised with care and compassion
            </p>
          </div>
          
          <div className={styles.mainImageContainer}>
            <img src={eggBox} alt="Premium Egg Box" className={styles.mainImage} />
            <div className={styles.floatingBadge}>
              <span>🥚 Women Egg box</span>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className={styles.features}>
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🥚</span>
            <div>
              <h4>White Shells</h4>
              <p>Pristine & Natural</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🌞</span>
            <div>
              <h4>Rich Amber Yolks</h4>
              <p>Golden Perfection</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🍳</span>
            <div>
              <h4>Rich & Creamy</h4>
              <p>Chef's Choice</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>♻️</span>
            <div>
              <h4>Eco-Friendly Carton</h4>
              <p>Biodegradable Blue</p>
            </div>
          </div>
        </div>

        {/* Premium Quality Section */}
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <div className={styles.sectionLabel}>Premium Quality</div>
            <h2>rich amber yolks, Exceptional Taste</h2>
            <p>
              Our <strong>VB300 heritage hens</strong> produce eggs renowned for their deep amber yolks 
              and luxurious, creamy texture. These free-range beauties are the secret ingredient 
              for chefs and home cooks who demand excellence.
            </p>
            <p>
              Through traditional farming practices and specially formulated natural feed, 
              we ensure every egg brings farm-fresh quality and unparalleled flavor to your table.
            </p>
            <div className={styles.qualityTags}>
              <span>Free Range</span>
              <span>Natural Feed</span>
              <span>Farm Fresh</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={yolkDish} alt="Golden Egg Dish" className={styles.image} />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        {/* Nutrition Stats */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💪</div>
            <h3>{protein}g</h3>
            <p>Premium Protein</p>
            <small>Per egg</small>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🔥</div>
            <h3>{energy}</h3>
            <p>Pure Energy</p>
            <small>Calories per egg</small>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>❤️</div>
            <h3>{fat}g</h3>
            <p>Heart Healthy</p>
            <small>Trans fat per egg</small>
          </div>
        </div>

        {/* Unique Breed Section */}
        <div className={styles.uniqueSection}>
          <div className={styles.breedImageContainer}>
            <img src={brownBlueEggs} alt="VB300 Heritage Eggs" className={styles.breedImage} />
            <div className={styles.breedBadge}>
              <span>VB300 Heritage Breed</span>
            </div>
          </div>
          
          <div className={styles.breedContent}>
            <div className={styles.sectionLabel}>Exceptional Heritage</div>
            <h2>The VB300 Difference</h2>
            <p>
              Our <strong>VB300 heritage hens</strong> roam freely in open pastures, expressing 
              their natural behaviors while producing these extraordinary brown and blue eggs. 
              Each egg is a testament to their happy, healthy lifestyle.
            </p>
            
            <div className={styles.breedFeatures}>
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🎀</span>
                <div>
                  <h4>Unique Breeds</h4>
                  <p>Rare heritage varieties for exceptional quality</p>
                </div>
              </div>
              
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>✨</span>
                <div>
                  <h4>Elevates Every Dish</h4>
                  <p>Transforms ordinary meals into extraordinary experiences</p>
                </div>
              </div>
              
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🥚</span>
                <div>
                  <h4>Truly Special Eggs</h4>
                  <p>Unmatched quality from our free-range VB300 hens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Experience the VB300 Difference</h2>
          <p>Join thousands of families who've discovered the exceptional quality of our heritage eggs</p>
          <button className={styles.ctaButton}>
         <Link to="https://hens-co-egg.vercel.app/">   Find in Stores Near You </Link>
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WomenContent;