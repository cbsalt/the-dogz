import React from 'react';

import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../assets/dogs-footer.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <Dogs />
    <p>Dogz | Direitos reservados ™</p>
  </footer>
);

export default Footer;
