"use client";

import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
// import NavbarIcons from "../NavbarIcons/NavbarIcons";
import { useEffect, useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (window.innerWidth <= 968 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handleResize = () => {
      setIsOpen(false);
      window.addEventListener("resize", handleResize);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const navItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Shop",
      href: "/shop",
    },
    {
      text: "Deals",
      href: "/deals",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Logout",
      href: "/logout",
    },
    {
      text: "Cart",
      href: "/cart",
    },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.middle}>
          <SearchBar />
        </div>
        <div className={styles.right}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : `${styles.navMenu} ${styles.active}`
            }
          >
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className={styles.navItem}
                onClick={() => setIsOpen(false)}
              >
                <Link href={navItem.href} className={styles.navItem}>
                  {navItem.text}
                </Link>
              </li>
            ))}
            {/* <div className={styles.navIconsContainer}>
          <NavIcons color={color} />
        </div> */}
          </ul>
          <span
            className={
              isOpen === false
                ? styles.hamburger
                : `${styles.hamburger} ${styles.active}`
            }
            onClick={openMenu}
          >
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
            <span className={styles.whiteBar}></span>
          </span>
        </div>
      </nav>
    </header>
  );
}
