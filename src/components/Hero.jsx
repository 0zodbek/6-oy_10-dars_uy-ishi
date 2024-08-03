import React from 'react';
import styles from "./Hero.module.css"
import HeroImg from "../images/hero.png"
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Let your <span>groceries</span> come to you</h1>
        <p>Get fresh groceries online without stepping out to make delicious food with the freshest ingredients</p>
        <div className={styles.searchBar}>
          <input className={styles.input} type="text" placeholder="Search here" />
          <button className={styles.button}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className={styles.features}>
          <span>Fresh Vegetables</span>
          <span>100% Guarantee</span><br />
          <span>Cash on Delivery</span>
          <span>Fast Delivery</span>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImg} alt="Groceries" />
      </div>
    </section>
  );
}

export default Hero;
