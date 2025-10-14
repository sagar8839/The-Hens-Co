import React, { useEffect, useState } from "react";
import styles from "./womenContent.module.css";
import eggBox from "/images/6box.png";
import yolkDish from "/images/yolks.webp";
import brownBlueEggs from "/images/vbhen.png";
import { Link } from "react-router-dom";

const SmallEggBoxContent = () => {
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

    animateValue(setProtein, 6, 1000); // 6g protein per egg
    animateValue(setEnergy, 70, 1500); // 70 calories
    animateValue(setFat, 5, 1000); // 5g fat per egg
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
              <span className={styles.titleSub}>Organic 6-Egg Box</span>
            </h1>
            <p className={styles.subtitle}>
              Discover nature’s pure goodness in every bite. Our{" "}
              <strong>organic, hormone-free, and antibiotic-free</strong> eggs are
              packed with clean protein, essential nutrients, and a rich, farm-fresh
              taste that supports a healthy lifestyle.
            </p>
          </div>

          <div className={styles.mainImageContainer}>
            <img src={eggBox} alt="6-Egg Organic Box" className={styles.mainImage} />
            <div className={styles.floatingBadge}>
              <span>🥚 6 Organic Eggs</span>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className={styles.features}>
          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🌿</span>
            <div>
              <h4>100% Organic</h4>
              <p>Free from chemicals and preservatives</p>
            </div>
          </div>

          <div className={styles.featureBadge}>
            <span className={styles.emoji}>💊</span>
            <div>
              <h4>Hormone & Drug-Free</h4>
              <p>No antibiotics, steroids, or synthetic boosters</p>
            </div>
          </div>

          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🦠</span>
            <div>
              <h4>Antibacterial Protection</h4>
              <p>Clean and hygienically packed eggs</p>
            </div>
          </div>

          <div className={styles.featureBadge}>
            <span className={styles.emoji}>💪</span>
            <div>
              <h4>Protein & Nutrient Rich</h4>
              <p>6g protein and vital vitamins per egg</p>
            </div>
          </div>

          <div className={styles.featureBadge}>
            <span className={styles.emoji}>🍃</span>
            <div>
              <h4>Antioxidant Benefits</h4>
              <p>Supports immunity and cell protection</p>
            </div>
          </div>
        </div>

        {/* Nutrition & Wellness Section */}
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <div className={styles.sectionLabel}>Nutrition & Wellness</div>
            <h2>Pure Nutrition in Every Organic Egg</h2>
            <p>
              Our 6-Egg Organic Box is perfect for small families and fitness
              lovers. Each egg provides essential nutrients that help build
              muscles, strengthen bones, and support brain function naturally.
            </p>
            <p>
              These eggs are rich in <strong>Omega-3 fatty acids</strong>,
              antioxidants like <strong>Lutein</strong> and <strong>Zeaxanthin</strong>,
              and essential vitamins such as <strong>B12</strong> and{" "}
              <strong>D</strong> that support immunity and heart health.
            </p>
            <p>Every egg you enjoy is:</p>
            <ul className={styles.bulletList}>
              <li>🌱 Organically produced with natural feed</li>
              <li>🥚 Free from hormones and antibiotics</li>
              <li>💧 Hygienically packed to retain freshness</li>
              <li>💪 High in protein and essential amino acids</li>
              <li>✨ Rich in antioxidants for better cell protection</li>
            </ul>
            <div className={styles.qualityTags}>
              <span>Organic</span>
              <span>Hormone-Free</span>
              <span>Antioxidant Rich</span>
              <span>Protein Boost</span>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src={yolkDish} alt="Organic Egg Dish" className={styles.image} />
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
            <img src={brownBlueEggs} alt="Organic Hens" className={styles.breedImage} />
            <div className={styles.breedBadge}>
              <span>Free-Range Organic Hens</span>
            </div>
          </div>

          <div className={styles.breedContent}>
            <div className={styles.sectionLabel}>From Healthy Hens</div>
            <h2>Nature’s Way to Freshness</h2>
            <p>
              Our hens live in natural, stress-free environments and are fed
              with organic grains, free from any growth hormones or synthetic
              additives. This ensures every egg is nutrient-rich, flavorful, and
              responsibly sourced.
            </p>
            <div className={styles.breedFeatures}>
              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🌾</span>
                <div>
                  <h4>Natural Feed</h4>
                  <p>Organic grains and greens only</p>
                </div>
              </div>

              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>🕊️</span>
                <div>
                  <h4>Free-Range Care</h4>
                  <p>Hens raised in open and natural spaces</p>
                </div>
              </div>

              <div className={styles.breedFeature}>
                <span className={styles.featureIcon}>💧</span>
                <div>
                  <h4>Clean & Hygienic</h4>
                  <p>Processed under strict quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2>Get Your Organic 6-Egg Box Today</h2>
          <p>
            Choose pure, healthy, and sustainable nutrition with The Hen’s
            Company’s organic eggs — good for you and the planet.
          </p>
          <button className={styles.ctaButton}>
            <Link to="https://hens-co-egg.vercel.app/">Shop Now</Link>
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmallEggBoxContent;
