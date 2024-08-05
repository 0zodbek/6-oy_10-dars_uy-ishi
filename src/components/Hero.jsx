import React, { useContext } from "react";
import styles from "./Hero.module.css";
import HeroImg from "../images/hero.png";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
import spinach from "../../src/images/spanch.png"
import carrot from "../../src/images/carrot.png"

function Hero() {
  const { t, i18n } = useTranslation();
  const theme = useContext(ThemeContext);
//   console.log(theme.theme);
  return (
    <section
      className={`${styles.hero} ${styles[theme.theme]}`}
    >
      <div className={styles.heroContent}>
        <h1>{t("heroH1")}</h1>
        <p>{t("heroP")}</p>
        <div className={styles.searchBar}>
          <input
            className={styles.input}
            type="text"
            placeholder={t("heroPl")}
          />
          <button className={styles.button}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className={styles.features}>
          <span>{t("heroCh1")}</span>
          <span>{t("heroCh2")}</span>
          <br />
          <span>{t("heroCh3")}</span>
          <span>{t("heroCh4")}</span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImg} alt="Groceries" />
      </div>
      <div className={styles.heroImg}>
        <div className={styles.wrapper}>
          <img src={spinach} alt="" />
          <p>{t("heroCard1")}</p>
          <p>$12.00</p>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.image} src={carrot} alt="" />
          <p>{t("heroCard2")}</p>
          <p>$9.00</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
