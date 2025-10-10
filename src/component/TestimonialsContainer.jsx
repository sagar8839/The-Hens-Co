import React from "react";
import Testimonial from "./Testimonial";
import styles from "./testimonial.module.css";

const TestimonialsContainer = () => {
  const testimonials = [
    {
      imageSrc: "./images/test.webp",
      name: "Sarah Johnson",
      role: "Instagram Influencer",
      text: "Absolutely love this product! It's become a staple in my daily routine. My followers keep asking about it!",
      rating: 5,
      platform: "instagram"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      name: "Mike Chen",
      role: "Tech Blogger",
      text: "As someone who reviews products daily, this stands out for its exceptional quality and attention to detail.",
      rating: 4,
      platform: "twitter"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      name: "Emily Davis",
      role: "Marketing Manager",
      text: "Our team has been using this for months and the results have been phenomenal. Highly recommended!",
      rating: 5,
      platform: "facebook"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      name: "David Wilson",
      role: "CEO at TechCorp",
      text: "This product transformed our workflow. The efficiency gains have been incredible for our business.",
      rating: 5,
      platform: "linkedin"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150",
      name: "Jessica Martinez",
      role: "Fitness Coach",
      text: "My clients are seeing amazing results since incorporating this into their routines. Game changer!",
      rating: 4,
      platform: "instagram"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      name: "Alex Thompson",
      role: "Software Engineer",
      text: "The quality and performance exceeded my expectations. Will definitely purchase again!",
      rating: 5,
      platform: "twitter"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      name: "Dr. Maria Garcia",
      role: "Nutritionist",
      text: "Scientifically backed and delivers real results. My patients love it and so do I!",
      rating: 5,
      platform: "facebook"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      name: "Lisa Park",
      role: "Creative Director",
      text: "The design and functionality are top-notch. It's rare to find something that looks this good and works perfectly.",
      rating: 4,
      platform: "instagram"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
      name: "Robert Kim",
      role: "Entrepreneur",
      text: "This product pays for itself. The ROI has been outstanding for our small business.",
      rating: 5,
      platform: "linkedin"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150",
      name: "Amanda Smith",
      role: "Content Creator",
      text: "I've tried many alternatives, but nothing compares to this. The quality is consistently excellent.",
      rating: 5,
      platform: "instagram"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150",
      name: "James Wilson",
      role: "Photographer",
      text: "As a creative professional, I appreciate the attention to detail. This product is clearly made with love.",
      rating: 4,
      platform: "twitter"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
      name: "Sophia Lee",
      role: "Yoga Instructor",
      text: "This has become an essential part of my wellness routine. The benefits are noticeable immediately.",
      rating: 5,
      platform: "instagram"
    }
  ];

  return (
    <div className={styles.testimonialsGrid}>
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          imageSrc={testimonial.imageSrc}
          name={testimonial.name}
          role={testimonial.role}
          text={testimonial.text}
          rating={testimonial.rating}
          platform={testimonial.platform}
        />
      ))}
    </div>
  );
};

export default TestimonialsContainer;