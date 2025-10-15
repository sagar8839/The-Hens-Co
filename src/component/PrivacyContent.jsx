import React from "react";
import styles from "./PrivacyContent.module.css";

const PrivacyContent = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.intro}>
        We collect and manage user data according to this Privacy Policy, with the goal of supporting our company values:
        transparency, accessibility, and security. Also, the prices of products and the privacy policies are subject to change.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Data Collected</h2>
        <p>
          We collect information from users who visit our website to maintain better service and usage experience.
          This data helps us improve our website and user interaction.
        </p>
        <p>
          We may collect non-personal data such as browser type, session duration, IP address, and language settings.
        </p>
        <h3 className={styles.listTitle}>Data we may collect includes:</h3>
        <ul className={styles.list}>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Mobile Number</li>
          <li>Location</li>
          <li>Payment Details (when required)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Use of the Data</h2>
        <p>
          Data collected is used only for legitimate business purposes such as processing orders, improving user experience,
          and communicating updates or promotional offers.
        </p>
        <p>
          We respect user privacy and ensure that no personal data is sold or shared with third parties without consent,
          except when required by law.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Sharing of Data</h2>
        <p>
          We do not share your personal information with any third party, except in limited cases necessary to fulfill
          services (for example, payment processing or delivery).
        </p>
        <p>
          We may also use aggregated or anonymized data for analytics, helping us enhance website performance and improve
          our user experience.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Data Protection</h2>
        <p>
          We follow strict security protocols to safeguard user information from unauthorized access, disclosure, or misuse.
          However, no method of data transmission over the Internet is 100% secure.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>
          For any queries regarding this policy, please contact us at{" "}
          <a href="mailto:info@henscompany.com" className={styles.email}>
            info@henscompany.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default PrivacyContent;
