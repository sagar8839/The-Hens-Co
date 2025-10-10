import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <div className={styles.heroContainer}>
      <img 
        src="./images/TheHens.png" 
        alt="The Hens" 
        className={styles.aboutHero}
      />
    </div>
  )
}

export default AboutHero;