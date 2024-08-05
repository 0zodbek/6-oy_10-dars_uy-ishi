import { useContext } from "react";
import React from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
function Header() {
  const { t, i18n } = useTranslation();
  const theme = useContext(ThemeContext);
  function handleChangee(event){
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
 
}

  function handleChange(event) {
    const newTheme = event.target.value;
    theme.setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <header className={`${styles.header} ${styles[theme.theme]}`} >
      <div className={styles.logo}>FinestMart</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">{t("header1")}</a>
          </li>
          <li>
            <a href="#">{t("header2")}</a>
          </li>
          <li>
            <a href="#">{t("header3")}</a>
          </li>
          <li>
            <a href="#">{t("header4")}</a>
          </li>
          <li>
            <a href="#">{t("header5")}</a>
          </li>
          <li>
            <a href="#">{t("header6")}</a>
          </li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <select
          value={theme.theme}
          onChange={handleChange}
          className={styles.select}
        >
          <option className={styles.option} value="dark">
            dark
          </option>
          <option className={styles.option} value="light">
            light
          </option>
        </select>
        <button className={styles.btn1}>Sign In</button>
        <button className={styles.btn2}>Sign Up</button>
        <select className={styles.select} onChange={handleChangee} >
            <option value="en">en</option>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
