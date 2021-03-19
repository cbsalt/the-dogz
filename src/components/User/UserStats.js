import React, { lazy, Suspense, useEffect } from 'react';

import Head from '../Helper/Head';
import Loader from '../Helper/Loader';
import Error from '../Helper/Error';

import useFetch from '../../hooks/useFetch';
import { STATS_GET } from '../../api';

const UserStatsGraphs = lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const {
    data, error, request, loading,
  } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <>
        <Head title="Estatísticas" />
        <Suspense fallback={<div />}>
          <UserStatsGraphs data={data} />
        </Suspense>
      </>
    );
  }
  return null;
};

export default UserStats;
