import React, {useContext} from 'react';
import styles from "./Categories.module.css"
import Card1 from "../images/card1.png"
import Card2 from "../images/card2.png"
import Card3 from "../images/card3.png"
import Card4 from "../images/card4.png"
import Card5 from "../images/card5.png"
import { ThemeContext } from "../App";
function Categories() {
    const theme = useContext(ThemeContext);
  return (
    <section className={`${
        theme.theme == "light" ? styles["light",'categories'] : styles["dark",'categories']
      }`}  >
      <div className={styles.category}>
        <img src={Card1} alt="Dairy Products" />
        <h3>Dairy Products</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src={Card2} alt="Vegetables & Fruits" />
        <h3>Vegetables & Fruits</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src={Card3} alt="Spices & Seasonings" />
        <h3>Spices & Seasonings</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src={Card4} alt="Honey" />
        <h3>Honey</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src={Card5} alt="Flour" />
        <h3>Flour</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default Categories;
