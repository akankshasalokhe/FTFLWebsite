"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/Group.png" alt="FTFL Logo" width={180} height={70} />
          <span className={styles.tagline}>From Scratch to Success</span>
        </Link>

        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
        </div>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <li><Link href="/" className={isActive("/") ? styles.activeLink : ""}>Home</Link></li>
          <li><Link href="/about" className={isActive("/about") ? styles.activeLink : ""}>About</Link></li>
          {/* <li><Link href="/services" className={isActive("/services") ? styles.activeLink : ""}>Services</Link></li> */}
          {/* Services Dropdown */}
          <li className={styles.dropdown}>
  <span
    onClick={() => isMobile && toggleDropdown("services")}
    onMouseEnter={() => !isMobile && setOpenDropdown("services")}
    onMouseLeave={() => !isMobile && setOpenDropdown(null)}
    className={`${isActive("/services") ? styles.activeLink : ""}`}
  >
    Services
    {isMobile && ( // Show arrow only on mobile
      <span className={styles.dropdownArrow}>
        {openDropdown === "services" ? "▲" : "▼"}
      </span>
    )}
  </span>
  
  <div
    className={`${styles.dropdownContent} ${
      openDropdown === "services" ? styles.dropdownActive : ""
    }`}
    onMouseLeave={() => !isMobile && setOpenDropdown(null)}
  >
    {/* Department 1: Development */}
    <div className={styles.dropdownSection}>
      <h4 className={styles.dropdownHeader}>Development</h4>
      <Link href="/services/web">Web Development</Link>
      <Link href="/services/app">App Development</Link>
      <Link href="/services/api">API Integration</Link>
    </div>

    {/* Department 2: Design */}
    <div className={styles.dropdownSection}>
      <h4 className={styles.dropdownHeader}>Design</h4>
      <Link href="/services/ui-ux">UI/UX Design</Link>
      <Link href="/services/graphic">Graphic Design</Link>
      <Link href="/services/logo">Logo Design</Link>
    </div>

    {/* Department 3: Video */}
    <div className={styles.dropdownSection}>
      <h4 className={styles.dropdownHeader}>Video</h4>
      <Link href="/services/editing">Video Editing</Link>
      <Link href="/services/motion">Motion Graphics</Link>
    </div>
  </div>
</li>
          {/* Courses Dropdown */}
          {/* <li className={styles.dropdown}>
            <span
              onClick={() => isMobile && toggleDropdown("courses")}
              onMouseEnter={() => !isMobile && setOpenDropdown("courses")}
              onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              className={`${isActive("/courses") ? styles.activeLink : ""}`}
            >
              Courses
            </span>
            <div
              className={`${styles.dropdownContent} ${
                openDropdown === "courses" ? styles.dropdownActive : ""
              }`}
            >
              <Link href="/courses/web-development">Web Development</Link>
              <Link href="/courses/app-development">App Development</Link>
            </div>
          </li> */}
          <li><Link href="/internship" className={isActive("/internship") ? styles.activeLink : ""}>Internship</Link></li>
          <li><Link href="/careers" className={isActive("/careers") ? styles.activeLink : ""}>Careers</Link></li>
          <li><Link href="/products" className={isActive("/products") ? styles.activeLink : ""}>Products</Link></li>
          <li><Link href="/internship" className={isActive("/internship") ? styles.activeLink : ""}>Internship</Link></li>

          <li><Link href="/blog" className={isActive("/blog") ? styles.activeLink : ""}>Blog</Link></li>

          

          <li><Link href="/contact" className={isActive("/contact") ? styles.activeLink : ""}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
