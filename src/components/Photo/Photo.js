import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
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
      <>
        <Head title={data.photo.title} />
        <section className="container mainContainer">
          <PhotoContent single data={data} />
        </section>
      </>
    );
  }
  return null;
};

export default Photo;
