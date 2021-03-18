import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
};
