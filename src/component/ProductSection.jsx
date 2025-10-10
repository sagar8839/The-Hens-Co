import React from "react";
import styles from "./ProductSection.module.css";
import { FaStar, FaLeaf, FaSeedling } from 'react-icons/fa';
import { Link } from "react-router-dom";

const products = [
  {
  id: 1,
  title: "Eggs for Women",
  description:
    "**Nourishment for Strength and Vitality.** Specially selected to support women’s daily nutrition, these eggs are packed with essential vitamins, high-quality protein, and iron to help boost energy, balance hormones, and enhance overall wellness. Perfect for powering an active, modern lifestyle.",
  image: "/images/womm.png",
  bgColor: styles.blueSection,
  dishImage: "/images/egg-toast.webp",
  dishPosition: styles.topLeftDish,
  rating: 4.8,
  sticker: <FaSeedling className={styles.stickerIcon} />,
  link: "/women",
   
},
{
  id: 2,
  title: "Eggs for Kids",
  description:
    "**Smart Nutrition for Growing Minds.** Naturally rich in protein, choline, and essential nutrients, these eggs help fuel your child’s growth, focus, and immunity. A wholesome choice for breakfast, lunch, or snacks — because healthy kids start with happy eggs!",
  image: "/images/kids.png",
  bgColor: styles.orangeSection,
  dishImage: "/images/eggbowl.webp",
  dishPosition: styles.bottomRightDish,
  rating: 4.9,
  sticker: <FaLeaf className={styles.stickerIcon} />,
  link : "/kids",
   
},
{
  id: 3,
  title: "Box of 30 Eggs",
  description:
    "**Freshness in Every Dozen.** A family pack of premium-quality eggs — naturally rich, clean, and full of flavor. Perfect for families, food lovers, and bakers who never compromise on quality. Enjoy consistent freshness, nutrition, and value with every egg.",
  image: "/images/thirty.png",
  bgColor: styles.greenSection,
  dishImage: "/images/eggCurry.webp",
  dishPosition: styles.topRightDish,
  rating: 4.7,
  sticker: <FaStar className={styles.stickerIcon} />,
  link : "/Eggs",
},

];

const ProductSection = () => {
  return (
    <div className={styles.container}>
      {products.map((item, index) => (
        <section key={item.id} className={`${styles.section} ${item.bgColor}`}>
          
          {/* Floating Decorative Dish Image */}
          <img 
            src={item.dishImage} 
            alt="Delicious Egg Dish" 
            className={`${styles.dishImage} ${item.dishPosition}`} 
            loading="lazy"
          />

          <div className={styles.productWrapper}>
            {/* Content on left for even, right for odd */}
            <div className={styles.content} style={{ order: index % 2 === 0 ? 1 : 2 }}>
              <div className={styles.stickerRatingContainer}>
                {item.sticker}
                <div className={styles.rating}>
                  <FaStar className={styles.ratingStar} />
                  <span className={styles.ratingText}>{item.rating}</span>
                </div>
              </div>
              
              <h2 className={`${styles.title} ${item.title.length > 12 ? styles.longTitle : ''}`}>
                {item.title}
              </h2>
              
              <p 
                className={styles.description}
                dangerouslySetInnerHTML={{ 
                  __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }}
              />
              
             
                  <Link to={item.link} className={styles.button}>
                Explore Details
              </Link>
            </div>

            {/* Image on right for even, left for odd */}
            <div className={styles.imageWrapper} style={{ order: index % 2 === 0 ? 2 : 1 }}>
              <img 
                src={item.image} 
                alt={`${item.title} Eggs`} 
                className={styles.image} 
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}
      
      {/* Bottom dish showcase */}
      {/* <div className={styles.bottomDishContainer}>
        <img 
          src="/images/dishes.webp" 
          alt="More Delicious Egg Dishes" 
          className={styles.bottomDish} 
          loading="lazy"
        />
      </div> */}
    </div>
  );
};

export default ProductSection;