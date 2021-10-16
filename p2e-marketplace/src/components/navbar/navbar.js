import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div>
          <Link to='/' className={styles.navbarLink}>
            this is a logo
          </Link>
        </div>
        <div>
          <nav>
            <Link to='' className={styles.navbarLink}>
              Explore offers
            </Link>
            <Link to='/register' className={styles.navbarLink}>
              Sign up
            </Link>
            <Link to='' className={styles.navbarLink}>
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
