import React, { useEffect } from 'react';

import UseFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import Loader from '../Helper/Loader';
import PhotoContent from '../Photo/PhotoContent';

import { PHOTO_GET } from '../../api';

import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
  const {
    data, error, loading, request,
  } = UseFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) { setModalPhoto(null); }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick} role="presentation">
      {error && <Error error={error} />}
      {loading && <Loader />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
