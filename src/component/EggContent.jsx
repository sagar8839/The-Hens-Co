import React, { useEffect, useState } from "react";
import styles from "./womenContent.module.css";
import eggBox from "/images/thirty.png";
import yolkDish from "/images/yolks.webp";
import brownBlueEggs from "/images/vbhen.png";
import { Link } from "react-router-dom";

const EggContent = () => {
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
    animateValue(setFat, 5, 1000); // 5g (approx healthy fat per egg)
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
              <span className={styles.titleMain}>The Hen's Company</span>
              <span className={styles.titleSub}>Premium 30-Egg Box</span>
            </h1>
            <p className={styles.subtitle}>
              At The Hen’s Company, we combine <strong>protection, sustainability, and freshness-focused design</strong> to ensure that every egg you purchase is safe, farm-fresh, and delivered with care.
            </p>
          </div>
          
          <div className={styles.mainImageContainer}>
            <img src={eggBox} alt="30-Egg Premium Box" className={styles.mainImage} />
            <div className={styles.floatingBadge}>
              <span>🥚 30 Egg Box</span>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className={styles.features}>
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🛡️</span>
            <div>
              <h4>Fresh & Safe</h4>
              <p>Carefully packaged to preserve quality</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🌱</span>
            <div>
              <h4>Sustainable Farming</h4>
              <p>Free-range hens and eco-friendly cartons</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>💪</span>
            <div>
              <h4>High in Protein</h4>
              <p>6g of premium protein per egg</p>
            </div>
          </div>
          
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>✨</span>
            <div>
              <h4>Rich in Nutrients</h4>
              <p>Vitamins & minerals for overall wellness</p>
            </div>
          </div>
        </div>

        {/* Premium Quality Section */}
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <div className={styles.sectionLabel}>Nutrition & Wellness</div>
            <h2>Healthy Eggs for the Whole Family</h2>
            <p>
              Each egg in our 30-egg box is packed with essential nutrients, carefully produced to support your family's health. These eggs provide a perfect balance of protein, healthy fats, and vitamins for strong muscles, healthy bones, and a sharp mind.
            </p>
            <p>
              With <strong>9 essential amino acids</strong>, Vitamin D, Selenium, Choline, and Vitamin B12, our eggs help boost immunity, improve cognitive function, and support heart health. Additionally, they contain Riboflavin (B2), Folate (B9), and Phosphorus for energy metabolism and overall growth.
            </p>
            <p>
              At The Hen’s Company, we ensure every egg is:
            </p>
            <ul className={styles.bulletList}>
              <li>🥚 Farm-fresh and naturally produced</li>
              <li>🌿 From free-range, healthy hens</li>
              <li>💧 Packed to maintain freshness and hygiene</li>
              <li>💪 Rich in protein for active lifestyles</li>
              <li>🌞 Full of vitamins and minerals for your family</li>
            </ul>
            <div className={styles.qualityTags}>
              <span>Safe & Fresh</span>
              <span>Rich in Protein</span>
              <span>Vitamins & Minerals</span>
              <span>Farm Fresh</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={yolkDish} alt="Healthy Egg Dish" className={styles.image} />
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
            <img src={brownBlueEggs} alt="Premium Hens" className={styles.breedImage} />
            <div className={styles.breedBadge}>
              <span>Premium Free-Range Hens</span>
            </div>
          </div>
          
          <div className={styles.breedContent}>
            <div className={styles.sectionLabel}>From Healthy Hens</div>
            <h2>The Hen's Company Difference</h2>
            <p>
              Our free-range hens roam freely in open pastures, fed with carefully formulated natural diets to ensure optimal nutrition in every egg. Each egg reflects our commitment to animal welfare, sustainability, and premium quality for your family.
            </p>
            <div className={styles.breedFeatures}>
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🌿</span>
                <div>
                  <h4>Sustainable Farming</h4>
                  <p>Eco-friendly and ethical practices</p>
                </div>
              </div>
              
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>✨</span>
                <div>
                  <h4>Superior Quality</h4>
                  <p>Fresh eggs with consistent taste and nutrition</p>
                </div>
              </div>
              
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🥚</span>
                <div>
                  <h4>Full Nutrition</h4>
                  <p>Supports growth, energy, and overall wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Get Your 30-Egg Premium Box Today</h2>
          <p>Experience freshness, safety, and premium nutrition for your family with The Hen’s Company eggs.</p>
          <button className={styles.ctaButton}>
            <Link to="https://hens-co-egg.vercel.app/">Shop Now</Link>
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EggContent;
