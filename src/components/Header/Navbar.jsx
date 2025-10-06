// "use client";

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import {
//   FaTimes, FaBars, FaLaptopCode, FaMobileAlt, FaServer,
//   FaPalette, FaPenNib, FaVideo, FaFilm
// } from "react-icons/fa";
// import styles from "./Navbar.module.css";
// import axios from "axios";



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesExpanded, setServicesExpanded] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const pathname = usePathname();
//   const isActive = (path) => pathname === path;
//   const navRef = useRef(null);
//   const [servicesData, setServicesData] = useState([]);
//   const [modulesData, setModulesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get("https://landing-page-yclw.vercel.app/api/service");
//         if (res.data.success) {
        
//           const services = res.data.data;
//   const uniqueModules = [...new Set(services.map((s) => s.module).filter(Boolean))];


//           // ✅ Group services by module
//           const grouped = uniqueModules.map((module) => ({
//             id: module.toLowerCase(),
//             name: module,
//             subServices: services
//               .filter((s) => s.module === module)
//               .map((s) => ({
//                 name: s.name,
//                 // href: `/services/${s.name.toLowerCase().replace(/\s+/g, "-")}`, // dynamic route
//                 href: `/services/${s._id}`,
//                 icon: (
//                   <img
//                     src={s.serviceIcon}
//                     alt={s.name}
//                     className="w-5 h-5 object-contain"
//                   />
//                 ),
//               })),
//           }));

//           setServicesData(grouped);
//           if (grouped.length > 0) {
//             setSelectedService(grouped[0].id);
//           }
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
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [servicesExpanded]);

//   const toggleServices = () => {
//     setServicesExpanded(!servicesExpanded);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setServicesExpanded(false);
//     setSelectedService(servicesData[0].id);

//   };

//   return (
//     <>
//       {isOpen && <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ""}`} onClick={closeMenu}></div>}

//       <nav ref={navRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${servicesExpanded ? styles.servicesExpanded : ""}`}>
//         <div className={styles.navContainer}>
//           {/* Logo */}
//           <Link href="/" className={styles.logo} onClick={closeMenu}>
//             <Image src="/Group.png" alt="FTFL Logo" width={180} height={70} />
//             <span className={styles.tagline}>From Scratch to Success</span>
//           </Link>

//           {/* Hamburger */}
//           <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
//           </div>

//           {/* Navigation Menu */}
//           <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
//             <li>
//               <Link href="/" className={isActive("/") ? styles.activeLink : ""} onClick={closeMenu}>Home</Link>
//             </li>
//             <li>
//               <Link href="/about" className={isActive("/about") ? styles.activeLink : ""} onClick={closeMenu}>About</Link>
//             </li>

//             {/* Services Item */}
//             <li className={styles.servicesItem}>
//               <span
//                 onMouseEnter={toggleServices}
//                 className={`${isActive("/services") ? styles.activeLink : ""} ${styles.servicesTrigger}`}
//               >
//                 Services
//                 {/* <span className={styles.dropdownArrow}>
//                   {servicesExpanded ? "▲" : "▼"}
//                 </span> */}
//               </span>

//               {/* Mobile Services Dropdown */}
//               {isMobile && servicesExpanded && (
//                 <div className={styles.mobileServicesDropdown}>
//                   <div className={styles.mobileServicesContainer}>
//                     {/* Left Column - Main Services */}
//                     <div className={styles.mobileServicesLeft}>
//                       {servicesData.map((service) => (
//                         <div
//                           key={service.id}
//                           className={`${styles.mobileServiceItem} ${selectedService === service.id ? styles.selectedService : ""}`}
//                           onClick={() => setSelectedService(service.id)}
//                         >
//                           {service.name}
//                         </div>
//                       ))}
//                     </div>

//                     {/* Right Column - Sub Services */}
//                     <div className={styles.mobileServicesRight}>
//                       <div className={styles.mobileSubServiceGrid}>
//                         {servicesData
//                           .find((s) => s.id === selectedService)
//                           ?.subServices.map((sub) => (
//                             <Link href={sub.href} key={sub.name} onClick={closeMenu} className={styles.mobileSubServiceItem}>
//                               <div className={styles.mobileSubServiceContent}>
//                                 <span className={styles.mobileSubIcon}>{sub.icon}</span>
//                                 <span className={styles.mobileSubServiceName}>{sub.name}</span>
//                               </div>
//                             </Link>
//                           ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </li>

//             <li>
//               <Link href="/internship" className={isActive("/internship") ? styles.activeLink : ""} onClick={closeMenu}>Internship</Link>
//             </li>
//             <li>
//               <Link href="/careers" className={isActive("/careers") ? styles.activeLink : ""} onClick={closeMenu}>Careers</Link>
//             </li>
//             <li>
//               <Link href="/products" className={isActive("/products") ? styles.activeLink : ""} onClick={closeMenu}>Products</Link>
//             </li>
//             <li>
//               <Link href="/blog" className={isActive("/blog") ? styles.activeLink : ""} onClick={closeMenu}>Blog</Link>
//             </li>
//             <li>
//               <Link href="/contact" className={isActive("/contact") ? styles.activeLink : ""} onClick={closeMenu}>Contact</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Desktop Services Expanded Content */}
//         {!isMobile && servicesExpanded && (
//           <div className={styles.servicesContent}>
//             <div className={styles.servicesContainer}>
//               {/* Left Column - Main Services */}
//               <div className={styles.servicesLeft}>
//                 {servicesData.map((service) => (
//                   <div
//                     key={service.id}
//                     className={`${styles.serviceItem} ${selectedService === service.id ? styles.selectedService : ""}`}
//                     onMouseEnter={() => setSelectedService(service.id)}
//                     onClick={() => setSelectedService(service.id)}
//                   >
//                     {service.name}
//                   </div>
//                 ))}
//               </div>

//               {/* Right Column - Sub Services */}
//               <div className={styles.servicesRight}>
//                 <div className={styles.subServiceGrid}>
//                   {servicesData
//                     .find((s) => s.id === selectedService)
//                     ?.subServices.map((sub) => (
//                       <Link href={sub.href} key={sub.name} onClick={closeMenu} className={styles.subServiceItem}>
//                         <div className={styles.subServiceContent}>
//                           <span className={styles.subIcon}>{sub.icon}</span>
//                           <span className={styles.subServiceName}>{sub.name}</span>
//                         </div>
//                       </Link>
//                     ))}
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










"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  FaTimes, FaBars, FaChevronRight
} from "react-icons/fa";
import styles from "./Navbar1.module.css";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('categories');

  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const navRef = useRef(null);
  const [servicesData, setServicesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://landing-page-yclw.vercel.app/api/service");
        if (res.data.success) {
          const services = res.data.data;
          const uniqueModules = [...new Set(services.map((s) => s.module).filter(Boolean))];

          const grouped = uniqueModules.map((module) => ({
            id: module.toLowerCase().replace(/\s+/g, "-"),
            name: module,
            subServices: services
              .filter((s) => s.module === module)
              .map((s) => ({
                name: s.name,
                href: `/services/${s._id}`,
                icon: s.serviceIcon ? (
                  <img
                    src={s.serviceIcon}
                    alt={s.name}
                    className="w-4 h-4 object-contain"
                  />
                ) : (
                  <FaChevronRight className="w-3 h-3 text-gray-400" />
                ),
              })),
          }));

          setServicesData(grouped);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

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
        setCurrentView('categories');
        setSelectedCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesExpanded]);

  const toggleServices = () => {
    setServicesExpanded(!servicesExpanded);
    if (!servicesExpanded) {
      setCurrentView('categories');
      setSelectedCategory(null);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('subservices');
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesExpanded(false);
    setCurrentView('categories');
    setSelectedCategory(null);
  };

  const getCurrentSubServices = () => {
    return servicesData.find(category => category.id === selectedCategory?.id)?.subServices || [];
  };

  return (
    <>
      {isOpen && <div className={`${styles.mobileOverlay} ${isOpen ? styles.active : ""}`} onClick={closeMenu}></div>}

      <nav ref={navRef} className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image src="/Group.png" alt="FTFL Logo" width={180} height={70} />
            <span className={styles.tagline}>From Scratch to Success</span>
          </Link>

          <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
          </div>

          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
            <li>
              <Link href="/" className={isActive("/") ? styles.activeLink : ""} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about") ? styles.activeLink : ""} onClick={closeMenu}>About</Link>
            </li>

            <li 
              className={styles.servicesItem}
              onMouseEnter={() => !isMobile && setServicesExpanded(true)}
              onMouseLeave={() => !isMobile && setServicesExpanded(false)}
            >
              <span
                onClick={toggleServices}
                className={`${isActive("/services") ? styles.activeLink : ""} ${styles.servicesTrigger}`}
              >
                Services
                <span className={styles.dropdownArrow}>
                  {servicesExpanded ? "▲" : "▼"}
                </span>
              </span>

              {/* Desktop Services Dropdown */}
              {!isMobile && servicesExpanded && (
                <div 
                  className={styles.servicesDropdown}
                  onMouseEnter={() => setServicesExpanded(true)}
                  onMouseLeave={() => {
                    setServicesExpanded(false);
                    setCurrentView('categories');
                    setSelectedCategory(null);
                  }}
                >
                  <div className={styles.dropdownContent}>
                    {currentView === 'categories' ? (
                      <div className={styles.categoriesView}>
                        <div className={styles.viewTitle}>Our Services</div>
                        <div className={styles.categoriesList}>
                          {servicesData.map((category) => (
                            <div
                              key={category.id}
                              className={styles.categoryItem}
                              onClick={() => handleCategoryClick(category)}
                            >
                              <span className={styles.categoryName}>{category.name}</span>
                              <FaChevronRight className={styles.categoryArrow} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={styles.subServicesView}>
                        <div className={styles.viewHeader}>
                          <div className={styles.viewTitle}>{selectedCategory?.name}</div>
                        </div>
                        <div className={styles.subServicesList}>
                          {getCurrentSubServices().map((sub) => (
                            <Link 
                              href={sub.href} 
                              key={sub.name} 
                              onClick={closeMenu} 
                              className={styles.subServiceItem}
                            >
                              <span className={styles.subIcon}>{sub.icon}</span>
                              <span className={styles.subServiceName}>{sub.name}</span>
                              
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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

        {/* Mobile Services Dropdown */}
        {isMobile && servicesExpanded && (
          <div className={styles.mobileServicesDropdown}>
            <div className={styles.mobileDropdownContent}>
              {currentView === 'categories' ? (
                <div className={styles.mobileCategoriesView}>
                  <div className={styles.mobileViewHeader}>
                    <div className={styles.mobileViewTitle}>Our Services</div>
                    <button className={styles.mobileCloseButton} onClick={closeMenu}>
                      <FaTimes className={styles.closeIcon} />
                    </button>
                  </div>
                  <div className={styles.mobileCategoriesList}>
                    {servicesData.map((category) => (
                      <div
                        key={category.id}
                        className={styles.mobileCategoryItem}
                        onClick={() => handleCategoryClick(category)}
                      >
                        <span className={styles.mobileCategoryName}>{category.name}</span>
                        <FaChevronRight className={styles.mobileCategoryArrow} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.mobileSubServicesView}>
                  <div className={styles.mobileViewHeader}>
                    <button className={styles.mobileCloseButton} onClick={closeMenu}>
                      <FaTimes className={styles.closeIcon} />
                    </button>
                  </div>
                  <div className={styles.mobileSubServicesList}>
                    <div className={styles.mobileCategoryTitle}>{selectedCategory?.name}</div>
                    {getCurrentSubServices().map((sub) => (
                      <Link 
                        href={sub.href} 
                        key={sub.name} 
                        onClick={closeMenu} 
                        className={styles.mobileSubServiceItem}
                      >
                        <span className={styles.mobileSubIcon}>{sub.icon}</span>
                        <span className={styles.mobileSubServiceName}>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;