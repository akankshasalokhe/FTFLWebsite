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

          {/* Services Dropdown */}
          <li className={styles.dropdown}>
            <span
              onClick={() => isMobile && toggleDropdown("services")}
              onMouseEnter={() => !isMobile && setOpenDropdown("services")}
              onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              className={`${isActive("/services") ? styles.activeLink : ""}`}
            >
              Services
            </span>
            <div
              className={`${styles.dropdownContent} ${
                openDropdown === "services" ? styles.dropdownActive : ""
              }`}
            >
              <Link href="/services/web">Web Development</Link>
              <Link href="/services/app">App Development</Link>
            </div>
          </li>

          <li><Link href="/products" className={isActive("/products") ? styles.activeLink : ""}>Products</Link></li>
          <li><Link href="/careers" className={isActive("/careers") ? styles.activeLink : ""}>Careers</Link></li>
          <li><Link href="/blog" className={isActive("/blog") ? styles.activeLink : ""}>Blog</Link></li>

          {/* Courses Dropdown */}
          <li className={styles.dropdown}>
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
          </li>

          <li><Link href="/contact" className={isActive("/contact") ? styles.activeLink : ""}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
