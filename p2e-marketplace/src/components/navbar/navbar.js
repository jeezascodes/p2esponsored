import React from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div>this is a logo</div>
        <div>
          <nav>
            <a className={styles.navbarLink}>Explore offers</a>
            <a className={styles.navbarLink}>Sign up</a>
            <a className={styles.navbarLink}>Sign in</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
