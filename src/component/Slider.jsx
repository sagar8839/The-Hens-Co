import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Slider.module.css';

const Slider = ({ renderParticles }) => {
  const cards = [
    { id: 1, className: styles.red, imgSrc: "/images/kids.png", imgAlt: "Pasture Raised", title: "Kids Egg", description: "Free-range lifestyle & stronger yolks" },
    { id: 2, className: styles.green, imgSrc: "/images/womm.png", imgAlt: "Organic Free Range", title: "Womens Egg", description: "100% Certified Organic, Non-GMO feed" },
    { id: 3, className: styles.blue, imgSrc: "/images/thirty.png", imgAlt: "Heritage", title: "Box of 30 Eggs", description: "Unique White & speckled shells" },
    { id: 4, className: styles.orange, imgSrc: "/images/6.png", imgAlt: "Free Range", title: "Box of 6 Eggs", description: "Fresh free-range eggs with orange yolks" },
  ];

  // refs
  const trackRef = useRef(null);
  const firstCardRef = useRef(null);
  const containerRef = useRef(null);

  // state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stepPx, setStepPx] = useState(0); // pixels to move per slide
  const [cardsToShow, setCardsToShow] = useState(4);

  // compute step: card width + gap (in px)
  const computeStep = useCallback(() => {
    const track = trackRef.current;
    const firstCard = firstCardRef.current;
    if (!track || !firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    // read gap from computed style (works in modern browsers)
    const style = window.getComputedStyle(track);
    const gapStr = style.getPropertyValue('gap') || style.getPropertyValue('column-gap') || '0px';
    const gapPx = parseFloat(gapStr) || 0;

    setStepPx(Math.round(cardWidth + gapPx));

    // determine how many cards are visible (helps compute maxSlide)
    const containerWidth = containerRef.current ? containerRef.current.clientWidth : 0;
    // roughly compute cards visible using cardWidth + gap
    const visible = Math.max(1, Math.floor((containerWidth + gapPx) / (cardWidth + gapPx)));
    setCardsToShow(visible);
  }, []);

  // recompute on mount and resize
  useEffect(() => {
    computeStep();
    window.addEventListener('resize', computeStep);
    return () => window.removeEventListener('resize', computeStep);
  }, [computeStep]);

  // re-calc after images load (some images might change width)
  useEffect(() => {
    const imgs = containerRef.current ? containerRef.current.querySelectorAll('img') : [];
    let loaded = 0;
    if (!imgs.length) { computeStep(); return; }

    const onLoad = () => {
      loaded += 1;
      if (loaded === imgs.length) computeStep();
    };
    imgs.forEach(img => {
      if (img.complete) onLoad();
      else img.addEventListener('load', onLoad, { once: true });
    });
    // cleanup listeners (not strictly necessary with once:true, but safe)
    return () => imgs.forEach(img => img.removeEventListener && img.removeEventListener('load', onLoad));
  }, [computeStep, cards]);

  const maxSlide = Math.max(0, cards.length - cardsToShow);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));
  const goToSlide = (i) => setCurrentSlide(Math.max(0, Math.min(i, maxSlide)));

  return (
    <div className={styles.curvedSection}>
      <div className={styles.particles}>
        {renderParticles ? renderParticles() : null}
      </div>

      <div className={styles.sliderContainer} ref={containerRef}>
        <button
          className={`${styles.sliderArrow} ${styles.prev}`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous"
        >
          <span className={styles.arrowIcon}>‹</span>
        </button>

        <div
          className={styles.sliderTrack}
          ref={trackRef}
          style={{
            transform: `translate3d(-${currentSlide * stepPx}px, 0, 0)`,
            // keep the transition in CSS but ensure hardware acceleration
            willChange: 'transform',
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={index === 0 ? firstCardRef : null}
              className={`${styles.card} ${card.className}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <img src={card.imgSrc} alt={card.imgAlt} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <button
          className={`${styles.sliderArrow} ${styles.next}`}
          onClick={nextSlide}
          disabled={currentSlide === maxSlide}
          aria-label="Next"
        >
          <span className={styles.arrowIcon}>›</span>
        </button>
      </div>

      <div className={styles.sliderNav}>
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            className={`${styles.sliderDot} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={styles.dotPulse} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
