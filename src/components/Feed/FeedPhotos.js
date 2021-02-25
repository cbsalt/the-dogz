import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';

import { PHOTOS_GET } from '../../api';

import FeedPhotosItem from './FeedPhotosItem';
import Error from '../Helper/Error';
import Loader from '../Helper/Loader';

import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
  const {
    data, loading, error, request,
  } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loader />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  }
  return null;
};

export default FeedPhotos;
