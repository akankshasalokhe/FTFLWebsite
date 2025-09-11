import React from 'react';
import Image from 'next/image';
import styles from './OurServices.module.css';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      image:"/s5.jpeg"
    },
    {
      id: 2,
      title: "Mobile Apps",
      image:"/s4.jpeg"
    },
    {
      id: 3,
      title: "UI/UX Design",
      image:"/s2.jpeg"
    },
    {
      id: 4,
      title: "Digital Marketing",
      image:"/s3.jpeg"
    },
    {
      id: 5,
      title: "Video Editing",
      image:"/s1.jpeg"
    },
    {
      id: 6,
      title: "Graphic Design",
      image:"/s2.jpeg"
    }
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.sectionSubtitle}>Discover our comprehensive range of digital solutions</p>
        
        <div className={styles.cardsContainer}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.titleOverlay}>
                <h3 className={styles.title}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;