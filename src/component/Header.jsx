import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// OR for brand-specific versions:
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import MenuImages from "./MenuImages";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.bodyNoScroll);
    } else {
 document.body.classList.remove(styles.bodyNoScroll);
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove(styles.bodyNoScroll);
    };
  }, [menuOpen]);

  // Close menu when clicking on overlay background
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      {/* Menu Button */}
      <button
        className={styles.menuBtn}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span className={styles.menuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Logo (Header) */}
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="Logo" />
      </div>

      {/* Sign In Button */}
      <button className={styles.signInBtn}>
        <span><a href="https://henscompany.com/admin">Sign In </a></span>
        <svg className={styles.signInIcon} viewBox="0 0 24 24" fill="none">
          <path d="M9 16L12 13M12 13L15 16M12 13V21M12 21C7.58172 21 4 17.4183 4 13V8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V13C20 17.4183 16.4183 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Overlay Menu */}
      <div 
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.menuContent}>
            
            {/* New: Menu Header for Logo and Close Button */}
            <div className={styles.menuHeader}>
                {/* Logo in Menu (Will be white due to CSS filter) */}
                <div className={styles.logo}>
                    <Link to="/">   <img src="./images/logo.png" alt="Logo" /> </Link> 
                </div>
                
                {/* Close Button */}
                <button
                    className={styles.closeBtn}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>


          <nav className={styles.nav}>
            <ul>
              <li>
                <span>
      <Link to="/products">Products</Link>
    </span>
                <svg className={styles.menuArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li>
                <span> 
         <Link to="/our-farms">Our Farms</Link>  
        </span>
                <svg className={styles.menuArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li>
                <span><Link to="/team">Teams </Link>
</span>
                <svg className={styles.menuArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li>
 
                <span>
               <Link to ="/about"> About </Link> </span>
                <svg className={styles.menuArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li>
                <span> <Link to ="/contact"> Contact </Link>
</span>
                <svg className={styles.menuArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
              <li>
                <span> <Link to ="https://hens-co-egg.vercel.app/"> Store Locator </Link> 
</span>
                <svg className={styles.menuArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </li>
            </ul>
          </nav>

            {/* Added: Image Section */}
            {/* <div className={styles.menuImages}> */}
                {/* Use your actual image paths here, these are placeholders */}
                {/* <img src="./images/heritage.webp" alt="Heritage Eggs" />
                <img src="./images/pasture.webp" alt="Pasture Raised Eggs" />
                <img src="./images/organic.webp" alt="Organic Eggs" />
                <img src="./images/free.webp" alt="Free Range Eggs" />
            </div> */}

            <MenuImages/>

            {/* New: Footer Container for layout control */}
            <div className={styles.footerContainer}>
                <div className={styles.footerLinks}>
                    <ul>
                        <li>FAQs</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Contact</li>
                    </ul>
                </div>
               {/* // Alternative with different styles: */}
<div className={styles.socialIcons}>
    <a href="#" aria-label="Facebook">
        <FaFacebook />
    </a>
    <a href="#" aria-label="Instagram">
        <FaInstagram />
    </a>
    <a href="#" aria-label="Twitter">
        <FaTwitter />
    </a>
    <a href="#" aria-label="YouTube">
        <FaYoutube />
    </a>
</div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;