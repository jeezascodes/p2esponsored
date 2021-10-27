import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/bencer_logo.png';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <div>
          <Link to='/' className={styles.navbarLink}>
            <img src={logo} className={styles.logo} />
          </Link>
        </div>
        <div>
          <nav>
            <Link to='/offers' className={styles.navbarLink}>
              Explore offers
            </Link>
            <Link to='/register' className={styles.navbarLink}>
              Sign up
            </Link>
            <Link to='/signin' className={styles.navbarLink}>
              Sign in
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
