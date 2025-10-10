import React, { useState } from "react";
import styles from "./ContactContent.module.css";

const ContactContent = () => {
  const [showAsk, setShowAsk] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // FAQs (show 5 preview)
  const faqs = [
    {
      question: "How can I place an order?",
      answer: `You can order through email, WhatsApp or download The Hens Co app from the Play Store/Apple Store. 
The Hens Co. offers fast and secure online ordering. 
Email: bd@henscompany.com 
Phone: +91-7880008188.`,
    },
    {
      question: "Can I place an order on call?",
      answer: `Yes, you can order online, through The Hens Co app, WhatsApp or email. 
You can also call us on +91-7880008188 for any help related to placing an order.`,
    },
    {
      question: "How do I know if my order is confirmed?",
      answer: `Once your order is confirmed, you will receive a confirmation message on your registered mobile number.`,
    },
    {
      question: "Is delivery free?",
      answer: `Delivery fee will be applicable as per order.`,
    },
    {
      question: "How long does order delivery take?",
      answer: `Your order will be delivered within 24 hours.`,
    },
  ];

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", query: "" });
    }, 2500);
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>
        contact <span>the hens co.</span>
      </h2>
      <p className={styles.subtitle}>Questions? Let us know how we can help.</p>

      {/* Top Buttons */}
      {!showAsk && !showForm && (
        <div className={styles.buttonBox}>
          <button
            className={styles.actionButton}
            onClick={() => setShowAsk(true)}
          >
            Have a question?
          </button>
          <button
            className={styles.actionButton}
            onClick={() => setShowForm(true)}
          >
            Still need help?
          </button>
        </div>
      )}

      {/* Ask Box */}
      {showAsk && (
        <div className={styles.askBox}>
          <h3>Ask a Question</h3>
          <p>We’d love to hear from you! Please email or call us:</p>
          <p>
            📧 <b>bd@henscompany.com</b> <br />
            📞 <b>+91-7880008188</b>
          </p>
          <button
            className={styles.backButton}
            onClick={() => setShowAsk(false)}
          >
            Back
          </button>
        </div>
      )}

      {/* Contact Form */}
      {showForm && (
        <div className={styles.formBox}>
          <h3>Contact Us</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
              <textarea
                name="query"
                placeholder="Write your query..."
                value={formData.query}
                onChange={handleFormChange}
                required
              ></textarea>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
              <button
                type="button"
                className={styles.backButton}
                onClick={() => setShowForm(false)}
              >
                Back
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              ✅ Your query has been submitted successfully!
            </div>
          )}
        </div>
      )}

      {/* FAQ Section */}
      {!showAsk && !showForm && (
        <div className={styles.faqSection}>
          <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
          <p className={styles.faqSub}>
            Can’t find what you’re looking for? We’ve got the answers!
          </p>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => handleExpand(index)}
                >
                  {faq.question}
                  <span>{expanded === index ? "–" : "+"}</span>
                </button>
                {expanded === index && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className={styles.viewAllButton}
            onClick={() => (window.location.href = "/faq")}
          >
            View all FAQs
          </button>
        </div>
      )}
    </section>
  );
};

export default ContactContent;
