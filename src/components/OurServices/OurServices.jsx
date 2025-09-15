import React, { useState } from 'react';
import Image from 'next/image';
import styles from './OurServices.module.css';

const OurServices = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      image: "/s5.jpeg",
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      image: "/s4.jpeg",
      icon: "📱"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered designs that enhance engagement and improve user experience.",
      image: "/s2.jpeg",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Strategic online marketing campaigns to boost your brand's visibility and growth.",
      image: "/s3.jpeg",
      icon: "📈"
    },
    {
      id: 5,
      title: "Video Editing",
      description: "Professional video editing services that tell your story compellingly.",
      image: "/s1.jpeg",
      icon: "🎬"
    },
    {
      id: 6,
      title: "Graphic Design",
      description: "Creative visual solutions for branding, marketing materials, and digital media.",
      image: "/s2.jpeg",
      icon: "✏️"
    }
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Discover our comprehensive range of digital solutions designed to elevate your business
          </p>
        </div>
        
        <div className={styles.cardsContainer}>
          {services.map(service => (
            <div 
              key={service.id} 
              className={`${styles.card} ${activeCard === service.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className={styles.cardInner}>
                <div className={styles.imageContainer}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.overlay}></div>
                  <div className={styles.icon}>{service.icon}</div>
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                  
                  <div className={styles.action}>
                    <button className={styles.learnMoreBtn}>
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <p>Need a custom solution?</p>
          <button className={styles.ctaButton}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;