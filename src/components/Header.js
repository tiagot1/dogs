import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dog } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/">
          <Dog />
        </Link>
        <Link className={styles.login} to="/login">
          Login | Criar conta
        </Link>
      </nav>
    </header>
  );
};

export default Header;
