import { useContext } from "react";
import React from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../App";
function Header() {
  const theme = useContext(ThemeContext);
  function handleChange(event) {
    // event.preventDefault();
    theme.setTheme(event.target.value);
  }
//   console.log(theme.theme);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>FinestMart</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Sales</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <select
          value={theme.theme}
          onChange={handleChange}
          className={styles.section}
        >
          <option className={styles.option} value="dark">
            dark
          </option>
          <option className={styles.option} value="light">
            light
          </option>
        </select>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
