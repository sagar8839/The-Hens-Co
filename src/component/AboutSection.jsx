import styles from './aboutsection.module.css';
import familyImage from '../../public/images/family.png'; 
import chickenImage from '../../public/images/vbhen.png'; 
import eggImage from '../../public/images/white.webp'; 

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <div className={styles.quoteContainer}>
            <h2 className={styles.quote}>
              "keep it simple: crack open happy."
            </h2>
            <div className={styles.underline}></div>
          </div>
          
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              At The Hens Co., we believe in keeping things simple. We give our hens more
              room to roam on family-owned farms alongside access to nutritious feed,
              fresh water and play kits. This yields the delicious eggs consumers know
              and expect from us.
            </p>
            
            <div className={styles.divider}></div>
            
            <p className={styles.smallText}>
              Just like you, our days are full of choices — and every choice we make impacts
              the quality of the eggs you receive from us. We stay focused on the care of our hens,
              our growers and ultimately, the quality of our eggs; the proof is inside the shell.
            </p>
          </div>

          <div className={styles.signatureContainer}>
            <p className={styles.signature}>
              - Aaksh Lalwani
            </p>
            <span className={styles.signatureTitle}>
              Chief Financial Officer
            </span>
          </div>
        </div>

        <div className={styles.imageArea}>
          <div className={styles.imageWrapper}>
            <img 
              src={familyImage} 
              alt="Happy Family" 
              className={styles.familyImage} 
            />
            <div className={styles.imageOverlay}></div>
          </div>
          
          <div className={styles.floatingElements}>
            <div className={styles.floatingChicken}>
              <img 
                src={chickenImage} 
                alt="Hen" 
                className={styles.chickenImage} 
              />
            </div>
            <div className={styles.floatingEgg}>
              <img 
                src={eggImage} 
                alt="Egg" 
                className={styles.eggImage} 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
      </div>
    </section>
  );
};

export default AboutSection;