"use client";

import Link from "next/link";
import { useState, useEffect,useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  FaTimes, FaBars, FaLaptopCode, FaMobileAlt, FaServer,
  FaPalette, FaPenNib, FaVideo, FaFilm
} from "react-icons/fa";
import styles from "./Navbar.module.css";

const servicesData = [
  {
    id: "development",
    name: "Development",
    subServices: [
      { name: "Web Development (V1)", href: "/services/web-development?design=v1", icon: <FaLaptopCode /> },
      { name: "Web Development (V2)", href: "/services/web-development?design=v2", icon: <FaLaptopCode /> },
      { name: "Web Development (V3)", href: "/services/web-development?design=v3", icon: <FaLaptopCode /> },
      { name: "Web Development (V4)", href: "/services/web-development?design=v4", icon: <FaLaptopCode /> },
      { name: "Web Development (V5)", href: "/services/web-development?design=v5", icon: <FaLaptopCode /> },
    ],
  },
  {
    id: "design",
    name: "Design",
    subServices: [
      { name: "UI/UX Design", href: "/services/ui-ux", icon: <FaPalette /> },
      { name: "Graphic Design", href: "/services/graphic", icon: <FaPenNib /> },
      { name: "Logo Design", href: "/services/logo", icon: <FaPenNib /> },
      { name: "Illustration", href: "/services/illustration", icon: <FaPenNib /> },
    ],
  },
  {
    id: "video",
    name: "Video",
    subServices: [
      { name: "Video Editing", href: "/services/editing", icon: <FaVideo /> },
      { name: "Motion Graphics", href: "/services/motion", icon: <FaFilm /> },
      { name: "Animation", href: "/services/animation", icon: <FaFilm /> },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [selectedService, setSelectedService] = useState(servicesData[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;
    const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesExpanded &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setServicesExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesExpanded]);

  const toggleServices = () => {
    setServicesExpanded(!servicesExpanded);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesExpanded(false);
    setSelectedService(servicesData[0].id);

  };

  return (
    <>
      {isOpen && <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ""}`} onClick={closeMenu}></div>}

      <nav ref={navRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${servicesExpanded ? styles.servicesExpanded : ""}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image src="/Group.png" alt="FTFL Logo" width={180} height={70} />
            <span className={styles.tagline}>From Scratch to Success</span>
          </Link>

          {/* Hamburger */}
          <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
          </div>

          {/* Navigation Menu */}
          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
            <li>
              <Link href="/" className={isActive("/") ? styles.activeLink : ""} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about") ? styles.activeLink : ""} onClick={closeMenu}>About</Link>
            </li>

            {/* Services Item */}
            <li className={styles.servicesItem}>
              <span
                onMouseEnter={toggleServices}
                className={`${isActive("/services") ? styles.activeLink : ""} ${styles.servicesTrigger}`}
              >
                Services
                {/* <span className={styles.dropdownArrow}>
                  {servicesExpanded ? "▲" : "▼"}
                </span> */}
              </span>

              {/* Mobile Services Dropdown */}
              {isMobile && servicesExpanded && (
                <div className={styles.mobileServicesDropdown}>
                  <div className={styles.mobileServicesContainer}>
                    {/* Left Column - Main Services */}
                    <div className={styles.mobileServicesLeft}>
                      {servicesData.map((service) => (
                        <div
                          key={service.id}
                          className={`${styles.mobileServiceItem} ${selectedService === service.id ? styles.selectedService : ""}`}
                          onClick={() => setSelectedService(service.id)}
                        >
                          {service.name}
                        </div>
                      ))}
                    </div>

                    {/* Right Column - Sub Services */}
                    <div className={styles.mobileServicesRight}>
                      <div className={styles.mobileSubServiceGrid}>
                        {servicesData
                          .find((s) => s.id === selectedService)
                          ?.subServices.map((sub) => (
                            <Link href={sub.href} key={sub.name} onClick={closeMenu} className={styles.mobileSubServiceItem}>
                              <div className={styles.mobileSubServiceContent}>
                                <span className={styles.mobileSubIcon}>{sub.icon}</span>
                                <span className={styles.mobileSubServiceName}>{sub.name}</span>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link href="/internship" className={isActive("/internship") ? styles.activeLink : ""} onClick={closeMenu}>Internship</Link>
            </li>
            <li>
              <Link href="/careers" className={isActive("/careers") ? styles.activeLink : ""} onClick={closeMenu}>Careers</Link>
            </li>
            <li>
              <Link href="/products" className={isActive("/products") ? styles.activeLink : ""} onClick={closeMenu}>Products</Link>
            </li>
            <li>
              <Link href="/blog" className={isActive("/blog") ? styles.activeLink : ""} onClick={closeMenu}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact") ? styles.activeLink : ""} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Services Expanded Content */}
        {!isMobile && servicesExpanded && (
          <div className={styles.servicesContent}>
            <div className={styles.servicesContainer}>
              {/* Left Column - Main Services */}
              <div className={styles.servicesLeft}>
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className={`${styles.serviceItem} ${selectedService === service.id ? styles.selectedService : ""}`}
                    onMouseEnter={() => setSelectedService(service.id)}
                    onClick={() => setSelectedService(service.id)}
                  >
                    {service.name}
                  </div>
                ))}
              </div>

              {/* Right Column - Sub Services */}
              <div className={styles.servicesRight}>
                <div className={styles.subServiceGrid}>
                  {servicesData
                    .find((s) => s.id === selectedService)
                    ?.subServices.map((sub) => (
                      <Link href={sub.href} key={sub.name} onClick={closeMenu} className={styles.subServiceItem}>
                        <div className={styles.subServiceContent}>
                          <span className={styles.subIcon}>{sub.icon}</span>
                          <span className={styles.subServiceName}>{sub.name}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;