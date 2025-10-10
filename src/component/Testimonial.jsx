// Testimonial.jsx
import React from "react";
import styles from "./testimonial.module.css";

const Testimonial = ({
  imageSrc = "./images/test.webp",
  name = "Jane Doe",
  role = "Happy Customer",
  text = "This product has changed my life! The quality is outstanding and the flavor is unmatched.",
  rating = 5,
  platform = "default"
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={i < rating ? styles.starFilled : styles.starEmpty}
      aria-hidden="true"
      style={{ "--star-index": i }}
    >
      ★
    </span>
  ));

  const cardClass = `${styles.card} ${styles[platform] || ""}`;

  return (
    <figure className={styles.testimonial}>
      <div 
        className={cardClass}
        data-platform={platform}
      >
        <img
          src={imageSrc}
          alt={`${name} avatar`}
          className={styles.avatar}
          loading="lazy"
        />
        <blockquote className={styles.quote}>{text}</blockquote>
        <figcaption className={styles.caption}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </figcaption>
        <div
          className={styles.stars}
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {stars}
        </div>
      </div>
    </figure>
  );
};

export default Testimonial;