"use state";

import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Cart from "../../../public/icons/shoppingCart.svg";
import Link from "next/link";

export async function Nav() {
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
        <div className={styles.middle}></div>
        <div className={styles.right}>
          <ul className={styles.menu}>
            {navItems.map((x, index) => (
              <li className={styles.listItem} key={index}>
                <Link href={x.href}>{x.text}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.iconContainer}>
            <Cart className={styles.icon} />
          </div>
        </div>
      </nav>
    </header>
  );
}
