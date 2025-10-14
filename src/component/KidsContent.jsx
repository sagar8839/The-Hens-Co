import React, { useEffect, useState } from "react";

import styles from "./KidsContent.module.css";

import eggBox from "/images/kids.png";
import yolkDish from "/images/yolks.webp";
import brownBlueEggs from "/images/vb.png";
import { Link } from "react-router-dom";

const KidsContent = () => {
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
    animateValue(setFat, 0, 1000); // 0g
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
              <span className={styles.titleMain}>Fun & Healthy</span>
              <span className={styles.titleSub}>Eggs for Kids</span>
            </h1>
            <p className={styles.subtitle}>
              Delicious eggs that make your little ones happy and strong, packed with essential nutrients.
            </p>
          </div>
          
          <div className={styles.mainImageContainer}>
            <img src={eggBox} alt="Kids Egg Box" className={styles.mainImage} />
            <div className={styles.floatingBadge}>
              <span>🥚 Kids Egg Box</span>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className={styles.features}>
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🥚</span>
            <div>
              <h4>Bright White Eggs</h4>
              <p>Fresh & Natural</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🌞</span>
            <div>
              <h4>Golden Yolks</h4>
              <p>Rich in Nutrients</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>💪</span>
            <div>
              <h4>Protein Power</h4>
              <p>Helps Growth & Strength</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>♻️</span>
            <div>
              <h4>Eco-Friendly Pack</h4>
              <p>Safe for Kids & Planet</p>
            </div>
          </div>
        </div>

        {/* Premium Quality Section */}
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <div className={styles.sectionLabel}>Nutritious & Fun</div>
            <h2>Eggs that kids love</h2>
            <p>
              Our eggs are carefully selected to be both tasty and full of nutrients, making every breakfast a happy moment.
            </p>
            <p>
              Packed with protein, vitamins, and healthy fats, they help kids grow strong and stay active throughout the day.
            </p>
            <div className={styles.qualityTags}>
              <span>Fun & Tasty</span>
              <span>Rich in Protein</span>
              <span>Farm Fresh</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={yolkDish} alt="Kid Friendly Egg Dish" className={styles.image} />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        {/* Nutrition Stats */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💪</div>
            <h3>{protein}g</h3>
            <p>Protein</p>
            <small>Per egg</small>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🔥</div>
            <h3>{energy}</h3>
            <p>Energy</p>
            <small>Calories per egg</small>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>❤️</div>
            <h3>{fat}g</h3>
            <p>Healthy Fat</p>
            <small>Per egg</small>
          </div>
        </div>

        {/* Unique Breed Section */}
        <div className={styles.uniqueSection}>
          <div className={styles.breedImageContainer}>
            <img src={brownBlueEggs} alt="VB300 Heritage Eggs" className={styles.breedImage} />
            <div className={styles.breedBadge}>
              <span>Fun & Healthy Eggs</span>
            </div>
          </div>
          
          <div className={styles.breedContent}>
            <div className={styles.sectionLabel}>Special for Kids</div>
            <h2>The Kids Egg Difference</h2>
            <p>
              Eggs that are fun, colorful, and packed with nutrients to support your child’s growth and energy every day.
            </p>
            
            <div className={styles.breedFeatures}>
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🎨</span>
                <div>
                  <h4>Fun Colors</h4>
                  <p>Bright eggs that kids enjoy</p>
                </div>
              </div>
              
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>✨</span>
                <div>
                  <h4>Boosts Energy</h4>
                  <p>Healthy nutrition for active play</p>
                </div>
              </div>
              
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🥚</span>
                <div>
                  <h4>Safe & Natural</h4>
                  <p>From happy hens in open pastures</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Make Breakfast Fun!</h2>
          <p>Give your kids the nutrition they love with our colorful, healthy eggs</p>
          <button className={styles.ctaButton}>
            <Link to="https://hens-co-egg.vercel.app/">Buy Kids Eggs Now</Link>
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default KidsContent;
