 
import styles from "./hero.module.css";

function Hero() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return(
    <div className={styles.container}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src="../video/ha.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        
        {/* Additional Content */}
        {/* <div className={styles.content}>
          <h2 className={styles.tagline}>Premium Eggs from Happy Hens</h2>
          <p className={styles.description}>Experience the difference with our free-range, ethically sourced eggs from hens raised in natural environments.</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div> */}
      </div>
  
  )
}

export default Hero;