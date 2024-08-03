import React from 'react';
import styles from "./Categories.module.css"

function Categories() {
  return (
    <section className={styles.categories}  >
      <div className={styles.category}>
        <img src="dairy-products-url" alt="Dairy Products" />
        <h3>Dairy Products</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src="vegetables-fruits-url" alt="Vegetables & Fruits" />
        <h3>Vegetables & Fruits</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src="spices-seasonings-url" alt="Spices & Seasonings" />
        <h3>Spices & Seasonings</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src="honey-url" alt="Honey" />
        <h3>Honey</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={styles.category}>
        <img src="flour-url" alt="Flour" />
        <h3>Flour</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default Categories;
