import React, { useContext } from "react";
import styles from "./Categories.module.css";
import Card1 from "../images/card1.png";
import Card2 from "../images/card2.png";
import Card3 from "../images/card3.png";
import Card4 from "../images/card4.png";
import Card5 from "../images/card5.png";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
function Categories() {
  const { t, i18n } = useTranslation();
  const theme = useContext(ThemeContext);
  return (
    <section className={`${styles.categories} ${styles[theme.theme]}`}>
      <div className={styles.category}>
        <img src={Card1} alt="Dairy Products" />
        <h3>{t("card1h")}</h3>
        <p>{t("heroP")}</p>
      </div>
      <div className={styles.category}>
        <img src={Card2} alt="Vegetables & Fruits" />
        <h3>{t("card2h")}</h3>
        <p>{t("heroP")}</p>
      </div>
      <div className={styles.category}>
        <img src={Card3} alt="Spices & Seasonings" />
        <h3>{t("card3h")}</h3>
        <p>{t("heroP")}</p>
      </div>
      <div className={styles.category}>
        <img src={Card4} alt="Honey" />
        <h3>{t("card4h")}</h3>
        <p>{t("heroP")}</p>
      </div>
      <div className={styles.category}>
        <img src={Card5} alt="Flour" />
        <h3>{t("card5h")}</h3>
        <p>{t("heroP")}</p>
      </div>
    </section>
  );
}

export default Categories;
