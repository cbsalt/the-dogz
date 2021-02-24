import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPics } from '../../assets/feed.svg';
import { ReactComponent as Stats } from '../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../assets/adicionar.svg';
import { ReactComponent as Exit } from '../../assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 640px)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
      <button
        type="button"
        aria-label="Menu"
        className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
        onClick={() => setMobileMenu(!mobileMenu)}
      />
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/account" end activeClassName={styles.active}>
          <MyPics />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/account/statistics" activeClassName={styles.active}>
          <Stats />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/account/post" activeClassName={styles.active}>
          <AddPhoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout} type="button">
          <Exit />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
