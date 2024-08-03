import React from 'react';
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>FinestMart</div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Sales</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.authButtons}>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
