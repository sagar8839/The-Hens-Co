import React from "react";
import styles from "./TermsContent.module.css";

const TermsContent = () => {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.title}>Terms & Conditions</h1>

      <p>
        These Terms and Conditions constitute a legally binding agreement between you (the “User”) and The Hens Co.
        (“we”, “our”, or “us”), governing your access to and use of our website and services. By using our website,
        you agree to comply with and be bound by these terms.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>User Registration</h2>
        <p>
          You are required to register with accurate information. You are responsible for maintaining the confidentiality
          of your account credentials and all activities under your account. We reserve the right to suspend, disable,
          or terminate accounts that violate these Terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Third-Party Websites and Content</h2>
        <p>
          Our website may contain links to third-party websites or content that are not under our control. We do not
          endorse or assume responsibility for any third-party websites or materials. You access them at your own risk.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Intellectual Property Rights</h2>
        <p>
          All content, including text, images, logos, and graphics available on this site, is the property of The Hens Co.
          or its licensors. You may not copy, reproduce, or distribute any materials without prior written consent.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Limitation of Liability</h2>
        <p>
          We are not liable for any direct, indirect, or incidental damages arising from your use or inability to use our
          website or services. This includes, but is not limited to, loss of profits, data, or goodwill.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Amendments</h2>
        <p>
          We reserve the right to modify or replace these Terms & Conditions at any time. Updated versions will be
          posted on this page, and continued use of the site after changes means acceptance of the new terms.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of the courts in Madhya Pradesh, India.
        </p>
      </section>

      <p className={styles.note}>
        By continuing to use this website, you acknowledge that you have read, understood, and agreed to these Terms
        & Conditions.
      </p>
    </div>
  );
};

export default TermsContent;
