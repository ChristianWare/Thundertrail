"use client";

import styles from "./SearchBar.module.css";
import SearchIcon from "../../../public/icons/search.svg";

export default function SearchBar() {
  return (
    <form className={styles.container}>
      <input type='text' placeholder='search' className={styles.input} />
      <SearchIcon className={styles.icon} />
    </form>
  );
}
