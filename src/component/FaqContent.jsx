import React, { useState,useRef } from "react";
import styles from "./Faq.module.css";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const allFaqs = [
  {
    question: "How can I place an order?",
    answer: `You can order through email, WhatsApp or download The Hens Co app from the Play Store or Apple store.
The Hens Co. is pleased to offer fast and secure online ordering.
Simply download our app, create an account, select your product and place the order.
Email: bd@henscompany.com | Phone: +91-7880008188.`,
  },
  {
    question: "Can I place an order on call?",
    answer:
      "You can order online, through The Hens Co app, WhatsApp or email. However, you can call us on +91-7880008188 for help related to placing an order.",
  },
  {
    question: "How do I know if my order is confirmed?",
    answer:
      "Once your order is confirmed, you will receive a confirmation message on your registered mobile number.",
  },
  {
    question: "Is delivery free?",
    answer: "Delivery fee will be applicable as per the order amount.",
  },
  {
    question: "How long does order delivery take?",
    answer: "Your order will be delivered within 24 hours.",
  },
  {
    question: "What time can the orders be placed?",
    answer: "Orders can be placed anytime, 24x7.",
  },
  {
    question: "How will my orders be delivered?",
    answer: "Once confirmed, the order will be delivered at your doorstep.",
  },
  {
    question: "How can I cancel my order?",
    answer:
      "If you need to cancel your order, please contact us at +91-7880008188 within 1 hour of confirmation.",
  },
  {
    question: "How do I get my refund?",
    answer:
      "If cancellation is accepted, the refund will be initiated within 4-5 working days.",
  },
  {
    question: "Why is my location not serviceable?",
    answer:
      "Your location is shown as non-serviceable if we currently do not deliver in that area.",
  },
  {
    question: "Can I have my order delivered the next day?",
    answer:
      "Yes. Please call +91-7880008188 or email bd@henscompany.com for priority delivery.",
  },
  {
    question: "What if I have a problem with my delivery?",
    answer:
      "You can reach out to us at +91-7880008188 or email bd@henscompany.com for any delivery issues.",
  },
  {
    question: "Can I change the address once the order has been placed?",
    answer:
      "To change the address, you need to cancel and re-place the order with the new address.",
  },
  {
    question: "Can I pay online?",
    answer: "Yes, online payment is available.",
  },
  {
    question: "What payment modes do you accept?",
    answer:
      "We accept credit/debit cards, net banking, UPI, and cash on delivery.",
  },
  {
    question: "Will I get an invoice?",
    answer:
      "Yes, you can download the invoice from the ‘My Orders’ section in The Hens Co. App.",
  },
  {
    question: "How are the eggs packaged?",
    answer:
      "Eggs are handpicked, cleaned, and packed hygienically with great care.",
  },
  {
    question: "Can I place bulk orders?",
    answer:
      "Yes, bulk orders can be placed via email bd@henscompany.com or The Hens Co app.",
  },
  {
    question: "Are there any registration charges?",
    answer: "No, registration is absolutely free.",
  },
  {
    question: "Can I add more than one delivery address?",
    answer:
      "Yes, you can add multiple addresses. Each order, however, can only be delivered to one address.",
  },
  {
    question: "Do you have offline stores?",
    answer: "No, The Hens Co is an online-only platform.",
  },
  {
    question: "Can businesses place bulk orders?",
    answer:
      "Yes, we supply to institutions like restaurants and corporates. Contact +91-7880008188 or bd@henscompany.com.",
  },
   {
    question: "Are The Hens Co. eggs organic?",
    answer:
      "We offer both regular and organic eggs. Organic eggs are produced from hens fed on natural, chemical-free feed.",
  },
  {
    question: "Do you deliver to all cities in India?",
    answer:
      "Currently, we serve selected cities. Please enter your pin code in The Hens Co. app to check availability.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once dispatched, you can track your order in real-time from The Hens Co. App or WhatsApp link.",
  },
  {
    question: "Do you offer subscription services for regular egg delivery?",
    answer:
      "Yes, you can subscribe for daily, weekly, or monthly egg deliveries at discounted rates.",
  },
  {
    question: "What should I do if I receive broken eggs?",
    answer:
      "Please report the issue within 2 hours of delivery via app, call, or WhatsApp. We will replace the damaged items.",
  },
  {
    question: "Are the eggs temperature controlled during delivery?",
    answer:
      "Yes, we use temperature-controlled delivery to maintain egg freshness during transport.",
  },
  {
    question: "Do you provide special packaging for gifting?",
    answer:
      "Yes, we offer eco-friendly premium packaging options for gifting. Contact support for details.",
  },
  {
    question: "Is The Hens Co. app available for iOS users?",
    answer:
      "Yes, The Hens Co. app is available on both the Apple App Store and Google Play Store.",
  },
];

const FaqContent = () => {
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const faqsPerPage = 10;
  const faqContainerRef = useRef(null);

  const filteredFaqs = allFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);
  const currentFaqs = filteredFaqs.slice(
    (page - 1) * faqsPerPage,
    page * faqsPerPage
  );

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const scrollToTop = () => {
    if (faqContainerRef.current) {
      faqContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Scroll after state update
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <div className={styles.faqContainer} ref={faqContainerRef}>
      <h2 className={styles.heading}>frequently asked questions</h2>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search your question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className={styles.faqList}>
        {currentFaqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expanded === index && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? styles.active : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>→</button>
        )}
      </div>
    </div>
  );
};

export default FaqContent;