import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';

import FeedPhotosItem from './FeedPhotosItem';
import Error from '../Helper/Error';
import Loader from '../Helper/Loader';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({
  page, user, setModalPhoto, setInfinite,
}) => {
  const {
    data, loading, error, request,
  } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loader />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;

FeedPhotos.defaultProps = {
  page: 1,
  user: 0,
};

FeedPhotos.propTypes = {
  page: PropTypes.number,
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  setModalPhoto: PropTypes.func.isRequired,
  setInfinite: PropTypes.func.isRequired,
};
