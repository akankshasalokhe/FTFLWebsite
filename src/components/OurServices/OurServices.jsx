"use client";
import Image from "next/image";
import styles from "./OurServices.module.css";

const servicesData = [
  {
    id: 1,
    title: "Mobile App Development",
    desc: "We create scalable and feature-rich mobile apps tailored to your business needs, ensuring smooth performance and user experience.",
    img: "/Team.jpeg",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "From responsive websites to complex web applications, our team builds robust and secure digital solutions that drive growth.",
    img: "/images/web-dev.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Our creative designers craft visually stunning and intuitive interfaces, enhancing customer engagement and satisfaction.",
    img: "/images/ui-ux.jpg",
  },
];

const OurServices = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.grid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            {/* Left Image */}
            <div className={styles.imageBox}>
              <Image
                src={service.img}
                alt={service.title}
                width={200}
                height={200}
                className={styles.image}
              />
            </div>

            {/* Right Content */}
            <div className={styles.contentBox}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.desc}</p>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
