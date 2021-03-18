import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Helper/Image';

import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick} role="presentation">
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;

FeedPhotosItem.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    acessos: PropTypes.string.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};
