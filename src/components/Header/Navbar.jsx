"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
      { name: "Web Development", href: "/services/web", icon: <FaLaptopCode /> },
      { name: "App Development", href: "/services/app", icon: <FaMobileAlt /> },
      { name: "API Integration", href: "/services/api", icon: <FaServer /> },
      { name: "Backend Services", href: "/services/backend", icon: <FaServer /> },
      { name: "Frontend Services", href: "/services/frontend", icon: <FaLaptopCode /> },
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedService, setSelectedService] = useState(servicesData[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

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

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setSelectedService(servicesData[0].id);
  };

  return (
    <>
      {isOpen && <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ""}`} onClick={closeMenu}></div>}

      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
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

            {/* Services Dropdown */}
            <li
              className={styles.dropdown}
              onMouseEnter={() => !isMobile && setOpenDropdown("services")}
              onMouseLeave={() => !isMobile && setOpenDropdown(null)}
            >
              <span
                onClick={() => isMobile && toggleDropdown("services")}
                className={`${isActive("/services") ? styles.activeLink : ""} ${styles.dropdownTrigger}`}
              >
                Services
                {isMobile && (
                  <span className={styles.dropdownArrow}>
                    {openDropdown === "services" ? "▲" : "▼"}
                  </span>
                )}
              </span>

              <div
                className={`${styles.dropdownContent} ${
                  openDropdown === "services" ? styles.dropdownActive : ""
                }`}
              >
                <div className={styles.dropdownTwoColumns}>
                  {/* Left Column - Main Services */}
                  <div className={styles.leftColumn}>
                    {servicesData.map((service) => (
                      <div
                        key={service.id}
                        className={`${styles.serviceItem} ${selectedService === service.id ? styles.selectedService : ""}`}
                        onMouseEnter={() => !isMobile && setSelectedService(service.id)}
                        onClick={() => setSelectedService(service.id)}
                      >
                        {service.name}
                      </div>
                    ))}
                  </div>

                  {/* Right Column - Sub Services */}
                  <div className={styles.rightColumn}>
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
      </nav>
    </>
  );
};

export default Navbar;