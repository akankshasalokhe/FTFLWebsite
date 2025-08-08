"use client";

import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./AboutUs.module.css";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Text */}
        <div className={styles.textContent} data-aos="fade-right">
          <h2 className={styles.title}>About Our Company</h2>
          <p className={styles.description}>
            We are a passionate IT solutions company delivering modern web, mobile,
            and cloud-based applications. Our goal is to help businesses achieve
            digital transformation with innovative solutions.
          </p>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper} data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="About Us"
          />
        </div>
      </div>

      {/* Stat Cards */}
      <div className={styles.stats} data-aos="zoom-in">
        <div className={`${styles.statCircle} ${styles.blue}`}>
          <h3><CountUp end={150} duration={8} style={{fontSize: "30px"}}/>+</h3>
          <span>Projects Completed</span>
        </div>
        <div className={`${styles.statCircle} ${styles.purple}`}>
          <h3><CountUp end={50} duration={10} style={{fontSize: "30px"}}/>+</h3>
          <span>Happy Clients</span>
        </div>
        <div className={`${styles.statCircle} ${styles.orange}`}>
          <h3><CountUp end={10} duration={12} style={{fontSize: "30px"}}/>+</h3>
          <span>Years of Experience</span>
        </div>
      </div>

      {/* Cards Row */}
      <div className={styles.cardsRow} data-aos="fade-up">
        <div className={`${styles.infoCard} ${styles.web}`}>
          <h5 className={styles.cardTitle}>Web Development</h5>
          <p className={styles.cardDesc}>Robust and scalable websites for every device.</p>
          <div className={styles.cardLanguages}>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className={`${styles.infoCard} ${styles.mobile}`}>
          <h5 className={styles.cardTitle}>Mobile App Development</h5>
          <p className={styles.cardDesc}>Native & cross-platform mobile solutions.</p>
          <div className={styles.cardLanguages}>
            <span>Flutter</span>
            <span>React Native</span>
            <span>Kotlin</span>
            <span>Swift</span>
          </div>
        </div>

        <div className={`${styles.infoCard} ${styles.design}`}>
          <h5 className={styles.cardTitle}>UI/UX Design</h5>
          <p className={styles.cardDesc}>Stunning designs with seamless user flow.</p>
          <div className={styles.cardLanguages}>
            <span>Figma</span>
            <span>Adobe XD</span>
            <span>Sketch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
