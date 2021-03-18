import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import Loader from '../Helper/Loader';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const {
    data, error, loading, request,
  } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loader />;
  if (data) {
    return (
      <section className="container mainContainer">
        <PhotoContent single data={data} />
      </section>
    );
  }
  return null;
};

export default Photo;
