import React from "react";
import styles from "./dish.module.css";

const Dish = () => {
  const cards = [
    {
      img: ".//images/dish1.webp",
      title: "the ultimate dad-approved grilling playlist",
    },
    {
      img: "./images/dish2.webp",
      title: "the ultimate guide to hard-boiled eggs",
    },
    {
      img: "./images/perfect.webp",
      title: "songs to queue at your next garden party",
    },
    {
      img: "./images/dish3.webp",
      title: "mythbusters: egg edition",
    },
    {
      img: "./images/dish4.webp",
      title: "host an egg trivia night: crack open some fun with friends!",
      highlight: true,
    },
    {
      img: "./images/dish5.webp",
      title: "around the world in 80 eggs",
    },
  ];

  return (
    <section className={styles.dish}>
      <h2 className={styles.heading}>Crack Open Happy</h2>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt={card.title} />
            <p className={card.highlight ? styles.highlight : ""}>
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dish;
