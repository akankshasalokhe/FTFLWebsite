// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { FaTimes, FaBars } from "react-icons/fa";
// import styles from "./Navbar.module.css";
// import axios from "axios";

// // Debounce helper
// function debounce(func, wait) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// }

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesExpanded, setServicesExpanded] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [hideHamburger, setHideHamburger] = useState(false);

//   // Data
//   const [servicesData, setServicesData] = useState([]);
//   const [isLoadingServices, setIsLoadingServices] = useState(true);
//   const [servicesError, setServicesError] = useState(null);

//   const pathname = usePathname();
//   const navRef = useRef(null);
//   const servicesToggleRef = useRef(null);

//   const isActive = (path) => pathname === path;

//   // ✅ Fetch services
//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setIsLoadingServices(true);
//         const res = await axios.get(
//           "https://landing-page-yclw.vercel.app/api/service"
//         );
//         if (res.data.success) {
//           const services = res.data.data;
//           const uniqueModules = [
//             ...new Set(services.map((s) => s.module).filter(Boolean)),
//           ];

//           const grouped = uniqueModules.map((module) => ({
//             id: module.toLowerCase(),
//             name: module,
//             subServices: services
//               .filter((s) => s.module === module)
//               .map((s) => ({
//                 name: s.name,
//                 href: `/services/${s._id}`,
//               })),
//           }));

//           setServicesData(grouped);
//         }
//       } catch (err) {
//         console.error("Error fetching services:", err);
//         setServicesError("Failed to load services");
//       } finally {
//         setIsLoadingServices(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   // ✅ Detect Mobile or Desktop
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* =======================================================
//      🖥 DESKTOP LOGIC (unchanged)
//   ======================================================= */
//   useEffect(() => {
//     if (!isMobile) {
//       const handleScroll = () => setIsScrolled(window.scrollY > 60);
//       const debouncedScroll = debounce(handleScroll, 10);
//       window.addEventListener("scroll", debouncedScroll);

//       const handleScrollCloseDropdown = () => {
//         if (window.innerWidth > 768) setServicesExpanded(false);
//       };
//       window.addEventListener("scroll", handleScrollCloseDropdown);

//       const handleScrollHamburger = () => {
//         if (window.innerWidth > 768 && window.scrollY > 60) {
//           setHideHamburger(true);
//         } else {
//           setHideHamburger(false);
//         }
//       };
//       window.addEventListener("scroll", handleScrollHamburger);
//       handleScrollHamburger();

//       return () => {
//         window.removeEventListener("scroll", debouncedScroll);
//         window.removeEventListener("scroll", handleScrollCloseDropdown);
//         window.removeEventListener("scroll", handleScrollHamburger);
//       };
//     }
//   }, [isMobile]);

//   /* =======================================================
//      📱 MOBILE LOGIC (simplified, no scroll triggers)
//   ======================================================= */
//   useEffect(() => {
//     if (isMobile) {
//       setIsScrolled(false);
//       setHideHamburger(false);

//       const handleScroll = () => {
//         // ❌ Mobile navbar won’t auto-show/hide on scroll
//       };
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, [isMobile]);

//   // ✅ Prevent background scroll when menu open (mobile only)
//   useEffect(() => {
//     document.body.style.overflow = isOpen && isMobile ? "hidden" : "";
//   }, [isOpen, isMobile]);

//   // ✅ Close when clicking outside (for dropdown)
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (navRef.current && !navRef.current.contains(e.target)) {
//         setServicesExpanded(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // ✅ Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setIsOpen(false);
//         setServicesExpanded(false);
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   // Handlers
//   const closeMenu = useCallback(() => {
//     setIsOpen(false);
//     setServicesExpanded(false);
//   }, []);

//   const handleServicesToggle = useCallback(() => {
//     setServicesExpanded((prev) => !prev);
//   }, []);

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && isMobile && (
//         <div
//           className={styles.mobileOverlay}
//           onClick={closeMenu}
//           aria-hidden="true"
//         />
//       )}

//       <nav
//         ref={navRef}
//         className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
//       >
//         <div className={styles.navContainer}>
//           {/* === Logo === */}
//           <Link href="/" className={styles.logo} onClick={closeMenu}>
//             <Image
//               src="/Group.png"
//               alt="FTFL Logo"
//               width={180}
//               height={70}
//               priority
//             />
//             <span className={styles.tagline}>From Scratch to Success</span>
//           </Link>

//           {/* === Hamburger / Close === */}
//           {!hideHamburger && (
//             <div
//               className={styles.hamburger}
//               onClick={() => setIsOpen((p) => !p)}
//               role="button"
//               tabIndex={0}
//             >
//               {isOpen ? (
//                 <FaTimes className={styles.icon} />
//               ) : (
//                 <FaBars className={styles.icon} />
//               )}
//             </div>
//           )}

//           {/* === Menu === */}
//           <ul
//             className={`${styles.navMenu} ${
//               isOpen || isScrolled ? styles.active : ""
//             }`}
//           >
//             <li>
//               <Link
//                 href="/"
//                 className={isActive("/") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 className={isActive("/about") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 About
//               </Link>
//             </li>

//             {/* Services */}
//             <li className={styles.servicesItem}>
//               <span
//                 onClick={handleServicesToggle}
//                 className={styles.dropdownToggle}
//               >
//                 Services <span className={styles.arrow}>›</span>
//               </span>

//               {/* Mobile dropdown */}
//               {isMobile && servicesExpanded && (
//                 <div className={styles.mobileDropdown}>
//                   {isLoadingServices ? (
//                     <div className={styles.loadingState}>Loading...</div>
//                   ) : servicesError ? (
//                     <div className={styles.errorState}>{servicesError}</div>
//                   ) : (
//                     servicesData.map((service) => (
//                       <div key={service.id}>
//                         <h4 className={styles.mobileServiceTitle}>
//                           {service.name}
//                         </h4>
//                         {service.subServices.map((sub) => (
//                           <Link
//                             href={sub.href}
//                             key={sub.name}
//                             className={styles.mobileSubService}
//                             onClick={closeMenu}
//                           >
//                             {sub.name}
//                           </Link>
//                         ))}
//                       </div>
//                     ))
//                   )}
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link
//                 href="/internship"
//                 className={isActive("/internship") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Internship
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/careers"
//                 className={isActive("/careers") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Careers
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/products"
//                 className={isActive("/products") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/blog"
//                 className={isActive("/blog") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className={isActive("/contact") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Contact
//               </Link>
//             </li>
//             {/* <li>
//               <Link
//                 href="/services"
//                 className={isActive("/services") ? styles.activeLink : ""}
//                 onClick={closeMenu}
//               >
//                 Service
//               </Link>
//             </li> */}
//           </ul>
//         </div>

//         {/* === Desktop Services Dropdown === */}
//         {!isMobile && (
//           <div
//             className={`${styles.servicesContent} ${
//               servicesExpanded ? styles.show : ""
//             }`}
//           >
//             <div className={styles.servicesGrid}>
//               {isLoadingServices ? (
//                 <div className={styles.loadingState}>Loading services...</div>
//               ) : servicesError ? (
//                 <div className={styles.errorState}>{servicesError}</div>
//               ) : (
//                 servicesData.map((service) => (
//                   <div key={service.id}>
//                     <h3 className={styles.serviceTitle}>{service.name}</h3>
//                     {service.subServices.map((sub) => (
//                       <Link
//                         href={sub.href}
//                         key={sub.name}
//                         className={styles.subServiceItem}
//                         onClick={closeMenu}
//                       >
//                         <div className={styles.subServiceContent}>
//                           <span className={styles.subArrow}>›</span>
//                           <span>{sub.name}</span>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;





"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
import { 
  FaHome, 
  FaInfoCircle, 
  FaLaptopCode, 
  FaUserGraduate, 
  FaBriefcase, 
  FaBox, 
  FaBlog, 
  FaEnvelope,
  FaChevronDown
} from "react-icons/fa";
import styles from "./Navbar.module.css";
import axios from "axios";

// Debounce helper
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(false);

  // Data
  const [servicesData, setServicesData] = useState([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [servicesError, setServicesError] = useState(null);

  const pathname = usePathname();
  const navRef = useRef(null);
  const servicesToggleRef = useRef(null);

  const isActive = (path) => pathname === path;

  // Navigation items with icons (only for mobile) - Services moved after About
  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaInfoCircle },
    { href: "/internship", label: "Internship", icon: FaUserGraduate },
    { href: "/careers", label: "Careers", icon: FaBriefcase },
    { href: "/products", label: "Products", icon: FaBox },
    { href: "/blog", label: "Blog", icon: FaBlog },
    { href: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  // ✅ Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoadingServices(true);
        const res = await axios.get(
          "https://landing-page-yclw.vercel.app/api/service"
        );
        if (res.data.success) {
          const services = res.data.data;
          const uniqueModules = [
            ...new Set(services.map((s) => s.module).filter(Boolean)),
          ];

          const grouped = uniqueModules.map((module) => ({
            id: module.toLowerCase(),
            name: module,
            subServices: services
              .filter((s) => s.module === module)
              .map((s) => ({
                name: s.name,
                href: `/services/${s._id}`,
              })),
          }));

          setServicesData(grouped);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setServicesError("Failed to load services");
      } finally {
        setIsLoadingServices(false);
      }
    };
    fetchServices();
  }, []);

  // ✅ Detect Mobile or Desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =======================================================
     🖥 DESKTOP LOGIC (unchanged)
  ======================================================= */
  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => setIsScrolled(window.scrollY > 60);
      const debouncedScroll = debounce(handleScroll, 10);
      window.addEventListener("scroll", debouncedScroll);

      const handleScrollCloseDropdown = () => {
        if (window.innerWidth > 768) setServicesExpanded(false);
      };
      window.addEventListener("scroll", handleScrollCloseDropdown);

      const handleScrollHamburger = () => {
        if (window.innerWidth > 768 && window.scrollY > 60) {
          setHideHamburger(true);
        } else {
          setHideHamburger(false);
        }
      };
      window.addEventListener("scroll", handleScrollHamburger);
      handleScrollHamburger();

      return () => {
        window.removeEventListener("scroll", debouncedScroll);
        window.removeEventListener("scroll", handleScrollCloseDropdown);
        window.removeEventListener("scroll", handleScrollHamburger);
      };
    }
  }, [isMobile]);

  /* =======================================================
     📱 MOBILE LOGIC (simplified, no scroll triggers)
  ======================================================= */
  useEffect(() => {
    if (isMobile) {
      setIsScrolled(false);
      setHideHamburger(false);

      const handleScroll = () => {
        // ❌ Mobile navbar won't auto-show/hide on scroll
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  // ✅ Prevent background scroll when menu open (mobile only)
  useEffect(() => {
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "";
  }, [isOpen, isMobile]);

  // ✅ Close when clicking outside (for dropdown)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setServicesExpanded(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handlers
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setServicesExpanded(false);
  }, []);

  const handleServicesToggle = useCallback(() => {
    setServicesExpanded((prev) => !prev);
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div
          className={styles.mobileOverlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav
        ref={navRef}
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.navContainer}>
          {/* === Logo === */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/Group.png"
              alt="FTFL Logo"
              width={180}
              height={70}
              priority
            />
            <span className={styles.tagline}>From Scratch to Success</span>
          </Link>

          {/* === Hamburger / Close === */}
          {!hideHamburger && (
            <div
              className={styles.hamburger}
              onClick={() => setIsOpen((p) => !p)}
              role="button"
              tabIndex={0}
            >
              {isOpen ? (
                <FaTimes className={styles.icon} />
              ) : (
                <FaBars className={styles.icon} />
              )}
            </div>
          )}

          {/* === Menu === */}
          <ul
            className={`${styles.navMenu} ${
              isOpen || isScrolled ? styles.active : ""
            }`}
          >
            {/* Home */}
            <li>
              <Link
                href="/"
                className={isActive("/") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaHome className={styles.navIcon} />}
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                href="/about"
                className={isActive("/about") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaInfoCircle className={styles.navIcon} />}
                About
              </Link>
            </li>

            {/* Services */}
            {/* <li className={styles.servicesItem}>
              <span
                onClick={handleServicesToggle}
                className={styles.dropdownToggle}
              >
                {isMobile && <FaLaptopCode className={styles.navIcon} />}
                Services 
                {isMobile ? (
                  <FaChevronDown className={`${styles.arrow} ${servicesExpanded ? styles.rotated : ''}`} />
                ) : (
                  <span className={styles.arrow}>›</span>
                )}
              </span>

              {isMobile && servicesExpanded && (
                <div className={styles.mobileDropdown}>
                  {isLoadingServices ? (
                    <div className={styles.loadingState}>Loading...</div>
                  ) : servicesError ? (
                    <div className={styles.errorState}>{servicesError}</div>
                  ) : (
                    servicesData.map((service) => (
                      <div key={service.id}>
                        <h4 className={styles.mobileServiceTitle}>
                          {service.name}
                        </h4>
                        {service.subServices.map((sub) => (
                          <Link
                            href={sub.href}
                            key={sub.name}
                            className={styles.mobileSubService}
                            onClick={closeMenu}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              )}
            </li> */}

            {/* Rest of the navigation items */}
            <li>
              <Link
                href="/internship"
                className={isActive("/internship") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaUserGraduate className={styles.navIcon} />}
                Internship
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={isActive("/careers") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaBriefcase className={styles.navIcon} />}
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={isActive("/products") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaBox className={styles.navIcon} />}
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={isActive("/blog") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaBlog className={styles.navIcon} />}
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={isActive("/contact") ? styles.activeLink : ""}
                onClick={closeMenu}
              >
                {isMobile && <FaEnvelope className={styles.navIcon} />}
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* === Desktop Services Dropdown === */}
        {/* {!isMobile && (
          <div
            className={`${styles.servicesContent} ${
              servicesExpanded ? styles.show : ""
            }`}
          >
            <div className={styles.servicesGrid}>
              {isLoadingServices ? (
                <div className={styles.loadingState}>Loading services...</div>
              ) : servicesError ? (
                <div className={styles.errorState}>{servicesError}</div>
              ) : (
                servicesData.map((service) => (
                  <div key={service.id}>
                    <h3 className={styles.serviceTitle}>{service.name}</h3>
                    {service.subServices.map((sub) => (
                      <Link
                        href={sub.href}
                        key={sub.name}
                        className={styles.subServiceItem}
                        onClick={closeMenu}
                      >
                        <div className={styles.subServiceContent}>
                          <span className={styles.subArrow}>›</span>
                          <span>{sub.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        )} */}
      </nav>
    </>
  );
};

export default Navbar;






// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import {
//   FaTimes, FaBars, FaChevronRight, FaChevronDown,
//   FaHome, FaInfoCircle, FaLaptopCode, FaBriefcase,
//   FaShoppingBag, FaBlog, FaEnvelope, FaCogs
// } from "react-icons/fa";
// import styles from "./Navbar2.module.css";
// import axios from "axios";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesExpanded, setServicesExpanded] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const pathname = usePathname();
//   const isActive = (path) => pathname === path;
//   const navRef = useRef(null);
//   const [servicesData, setServicesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Navigation items with icons
//   const navItems = [
//     { name: "Home", href: "/", icon: FaHome },
//     { name: "About", href: "/about", icon: FaInfoCircle },
//     { name: "Services", href: "/services", icon: FaCogs },
//     { name: "Internship", href: "/internship", icon: FaLaptopCode },
//     { name: "Careers", href: "/careers", icon: FaBriefcase },
//     { name: "Products", href: "/products", icon: FaShoppingBag },
//     { name: "Blog", href: "/blog", icon: FaBlog },
//     { name: "Contact", href: "/contact", icon: FaEnvelope },
//   ];

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get("https://landing-page-yclw.vercel.app/api/service");
//         if (res.data.success) {
//           const services = res.data.data;
//           const uniqueModules = [...new Set(services.map((s) => s.module).filter(Boolean))];

//           const grouped = uniqueModules.map((module) => ({
//             id: module.toLowerCase().replace(/\s+/g, "-"),
//             name: module,
//             subServices: services
//               .filter((s) => s.module === module)
//               .map((s) => ({
//                 name: s.name,
//                 href: `/services/${s._id}`,
//               })),
//           }));

//           setServicesData(grouped);
//         }
//       } catch (err) {
//         console.error("Error fetching services:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         servicesExpanded &&
//         navRef.current &&
//         !navRef.current.contains(event.target)
//       ) {
//         setServicesExpanded(false);
//         setExpandedCategory(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [servicesExpanded]);

//   const toggleServices = () => {
//     setServicesExpanded(!servicesExpanded);
//     if (!servicesExpanded) {
//       setExpandedCategory(null);
//     }
//   };

//   const toggleCategory = (categoryId) => {
//     setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setServicesExpanded(false);
//     setExpandedCategory(null);
//   };

//   return (
//     <>
//       {isOpen && <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ""}`} onClick={closeMenu}></div>}

//       <nav ref={navRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
//         <div className={styles.navContainer}>
//           <Link href="/" className={styles.logo} onClick={closeMenu}>
//             <Image src="/Group.png" alt="FTFL Logo" width={180} height={70} />
//             <span className={styles.tagline}>From Scratch to Success</span>
//           </Link>

//           <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
//           </div>

//           <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
//             {navItems.map((item) => (
//               item.name === "Services" ? (
//                 <li 
//                   key={item.name}
//                   className={styles.servicesItem}
//                   onMouseEnter={() => !isMobile && setServicesExpanded(true)}
//                   onMouseLeave={() => !isMobile && setServicesExpanded(false)}
//                 >
//                   <span
//                     onClick={toggleServices}
//                     className={`${isActive(item.href) ? styles.activeLink : ""} ${styles.servicesTrigger}`}
//                   >
//                     {isMobile && <item.icon className={styles.navIcon} />}
//                     {item.name}
//                     <span className={styles.dropdownArrow}>
//                       {servicesExpanded ? "▲" : "▼"}
//                     </span>
//                   </span>

//                   {/* Desktop Services Dropdown */}
//                   {!isMobile && servicesExpanded && (
//                     <div 
//                       className={styles.servicesDropdown}
//                       onMouseEnter={() => setServicesExpanded(true)}
//                       onMouseLeave={() => {
//                         setServicesExpanded(false);
//                         setExpandedCategory(null);
//                       }}
//                     >
//                       <div className={styles.dropdownContent}>
//                         <div className={styles.accordionContainer}>
//                           {servicesData.map((category) => (
//                             <div
//                               key={category.id}
//                               className={styles.accordionItem}
//                             >
//                               <div
//                                 className={styles.accordionHeader}
//                                 onClick={() => toggleCategory(category.id)}
//                               >
//                                 <span className={styles.accordionCategoryName}>{category.name}</span>
//                                 <span className={styles.accordionIcon}>
//                                   {expandedCategory === category.id ? <FaChevronDown /> : <FaChevronRight />}
//                                 </span>
//                               </div>
//                               {expandedCategory === category.id && (
//                                 <div className={styles.accordionContent}>
//                                   {category.subServices.map((sub) => (
//                                     <Link
//                                       href={sub.href}
//                                       key={sub.name}
//                                       onClick={closeMenu}
//                                       className={styles.accordionSubServiceItem}
//                                     >
//                                       {sub.name}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ) : (
//                 <li key={item.name}>
//                   <Link 
//                     href={item.href} 
//                     className={isActive(item.href) ? styles.activeLink : ""} 
//                     onClick={closeMenu}
//                   >
//                     {isMobile && <item.icon className={styles.navIcon} />}
//                     {item.name}
//                   </Link>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Services Dropdown */}
//         {isMobile && servicesExpanded && (
//           <div className={styles.mobileServicesDropdown}>
//             <div className={styles.mobileDropdownContent}>
//               <div className={styles.mobileAccordionContainer}>
//                 <div className={styles.mobileViewHeader}>
//                   <div className={styles.mobileViewTitle}>Our Services</div>
//                   <button className={styles.mobileCloseButton} onClick={closeMenu}>
//                     <FaTimes className={styles.closeIcon} />
//                   </button>
//                 </div>
//                 <div className={styles.mobileAccordionList}>
//                   {servicesData.map((category) => (
//                     <div
//                       key={category.id}
//                       className={styles.mobileAccordionItem}
//                     >
//                       <div
//                         className={styles.mobileAccordionHeader}
//                         onClick={() => toggleCategory(category.id)}
//                       >
//                         <span className={styles.mobileAccordionCategoryName}>{category.name}</span>
//                         <span className={styles.mobileAccordionIcon}>
//                           {expandedCategory === category.id ? <FaChevronDown /> : <FaChevronRight />}
//                         </span>
//                       </div>
//                       {expandedCategory === category.id && (
//                         <div className={styles.mobileAccordionContent}>
//                           {category.subServices.map((sub) => (
//                             <Link
//                               href={sub.href}
//                               key={sub.name}
//                               onClick={closeMenu}
//                               className={styles.mobileAccordionSubServiceItem}
//                             >
//                               {sub.name}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;










// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import {
//   FaTimes, FaBars, FaChevronRight, FaChevronDown,
//   FaHome, FaInfoCircle, FaLaptopCode, FaBriefcase,
//   FaShoppingBag, FaBlog, FaEnvelope, FaCogs
// } from "react-icons/fa";
// import styles from "./Navbar1.module.css";
// import axios from "axios";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesExpanded, setServicesExpanded] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const pathname = usePathname();
//   const isActive = (path) => pathname === path;
//   const navRef = useRef(null);
//   const [servicesData, setServicesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // Navigation items with icons
//   const navItems = [
//     { name: "Home", href: "/", icon: FaHome },
//     { name: "About", href: "/about", icon: FaInfoCircle },
//     { name: "Services", href: "/services", icon: FaCogs },
//     { name: "Internship", href: "/internship", icon: FaLaptopCode },
//     { name: "Careers", href: "/careers", icon: FaBriefcase },
//     { name: "Products", href: "/products", icon: FaShoppingBag },
//     { name: "Blog", href: "/blog", icon: FaBlog },
//     { name: "Contact", href: "/contact", icon: FaEnvelope },
//   ];

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get("https://landing-page-yclw.vercel.app/api/service");
//         if (res.data.success) {
//           const services = res.data.data;
//           const uniqueModules = [...new Set(services.map((s) => s.module).filter(Boolean))];

//           const grouped = uniqueModules.map((module) => ({
//             id: module.toLowerCase().replace(/\s+/g, "-"),
//             name: module,
//             subServices: services
//               .filter((s) => s.module === module)
//               .map((s) => ({
//                 name: s.name,
//                 href: `/services/${s._id}`,
//               })),
//           }));

//           setServicesData(grouped);
//         }
//       } catch (err) {
//         console.error("Error fetching services:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         servicesExpanded &&
//         navRef.current &&
//         !navRef.current.contains(event.target)
//       ) {
//         setServicesExpanded(false);
//         setSelectedCategory(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [servicesExpanded]);

//   // Auto-select first category when services dropdown opens
//   useEffect(() => {
//     if (servicesExpanded && !isMobile && servicesData.length > 0 && !selectedCategory) {
//       setSelectedCategory(servicesData[0].id);
//     }
//   }, [servicesExpanded, servicesData, isMobile, selectedCategory]);

//   const toggleServices = () => {
//     setServicesExpanded(!servicesExpanded);
//     if (!servicesExpanded) {
//       setSelectedCategory(null);
//     }
//   };

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setServicesExpanded(false);
//     setSelectedCategory(null);
//   };

//   const getCurrentSubServices = () => {
//     return servicesData.find(category => category.id === selectedCategory)?.subServices || [];
//   };

//   return (
//     <>
//       {isOpen && <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ""}`} onClick={closeMenu}></div>}

//       <nav ref={navRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
//         <div className={styles.navContainer}>
//           <Link href="/" className={styles.logo} onClick={closeMenu}>
//             <Image src="/Group.png" alt="FTFL Logo" width={180} height={70} />
//             <span className={styles.tagline}>From Scratch to Success</span>
//           </Link>

//           <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
//           </div>

//           <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
//             {navItems.map((item) => (
//               item.name === "Services" ? (
//                 <li
//                   key={item.name}
//                   className={styles.servicesItem}
//                 >
//                   <span
//                     onClick={toggleServices}
//                     className={`${isActive(item.href) ? styles.activeLink : ""} ${styles.servicesTrigger}`}
//                   >
//                     {isMobile && <item.icon className={styles.navIcon} />}
//                     {item.name}
//                     <span className={styles.dropdownArrow}>
//                       {servicesExpanded ? "▲" : "▼"}
//                     </span>
//                   </span>

//                   {/* Desktop Multi-Level Dropdown */}
//                   {!isMobile && servicesExpanded && (
//                     <div className={styles.multiLevelDropdown}>
//                       <div className={styles.dropdownContainer}>
//                         {/* Categories Column */}
//                         <div className={styles.categoriesColumn}>
//                           <div className={styles.categoriesList}>
//                             {servicesData.map((category) => (
//                               <div
//                                 key={category.id}
//                                 className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.categoryItemActive : ""
//                                   }`}
//                                 onClick={() => handleCategoryClick(category.id)}
//                               >
//                                 <span className={styles.categoryName}>
//                                   {category.name}
//                                 </span>
//                                 <FaChevronRight className={styles.categoryArrow} />
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Sub Services Column */}
//                         {selectedCategory && (
//                           <div className={styles.subServicesColumn}>
//                             <div className={styles.subServicesList}>
//                               {getCurrentSubServices().map((sub) => (
//                                 <Link
//                                   href={sub.href}
//                                   key={sub.name}
//                                   onClick={closeMenu}
//                                   className={styles.subServiceItem}
//                                 >
//                                   {sub.name}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ) : (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className={isActive(item.href) ? styles.activeLink : ""}
//                     onClick={closeMenu}
//                   >
//                     {isMobile && <item.icon className={styles.navIcon} />}
//                     {item.name}
//                   </Link>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>

//         {/* Mobile Services Dropdown */}
//         {isMobile && servicesExpanded && (
//           <div className={styles.mobileServicesDropdown}>
//             <div className={styles.mobileDropdownContent}>
//               <div className={styles.mobileViewHeader}>
//                 <button className={styles.mobileBackButton} onClick={toggleServices}>
//                   <FaChevronRight className={styles.backIcon} />
//                   Back
//                 </button>
//                 <button className={styles.mobileCloseButton} onClick={closeMenu}>
//                   <FaTimes className={styles.closeIcon} />
//                 </button>
//               </div>

//               {/* Accordion list */}
//               <div className={styles.mobileCategoriesList}>
//                 {servicesData.map((category) => (
//                   <div key={category.id} className={styles.mobileCategoryItem}>
//                     {/* Category Header */}
//                     <div
//                       className={`${styles.mobileCategoryHeader} ${selectedCategory === category.id ? styles.mobileCategoryHeaderActive : ""
//                         }`}
//                       onClick={() => handleCategoryClick(category.id)}
//                     >
//                       <span>{category.name}</span>
//                       <span className={styles.mobileCategoryArrow}>
//                         {selectedCategory === category.id ? <FaChevronDown /> : <FaChevronRight />}
//                       </span>
//                     </div>

//                     {/* Subcategories BELOW */}
//                     <div
//                       className={`${styles.mobileSubServicesWrapper} ${selectedCategory === category.id ? styles.showSubServices : ""
//                         }`}
//                     >
//                       {category.subServices.map((sub) => (
//                         <Link
//                           href={sub.href}
//                           key={sub.name}
//                           onClick={closeMenu}
//                           className={styles.mobileSubServiceItem}
//                         >
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//       </nav>
//     </>
//   );
// };

// export default Navbar;