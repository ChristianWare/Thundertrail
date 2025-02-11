// import { getMenu } from "@/lib/shopify";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Cart from "../../../public/icons/shoppingCart.svg";
// import { Menu } from "@/lib/shopify/types";
// import Link from "next/link";
// import Search from "./Search";

export async function Nav() {
  // const menu = await getMenu("next-js-frontend-menu");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.middle}>
          {/* <Search /> */}
        </div>
        <div className={styles.right}>
          <ul className={styles.menu}>
            {/* {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link href={item.path} prefetch={true}>
                  {item.title}
                </Link>
              </li>
            ))} */}
            <li>Menu Items</li>
          </ul>
          <div className={styles.iconContainer}>
            <Cart className={styles.icon} />
          </div>
        </div>
      </nav>
    </header>
  );
}
