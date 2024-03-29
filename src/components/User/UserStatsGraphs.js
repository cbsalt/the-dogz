import React, { useEffect, useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import Loader from '../Helper/Loader';
import styles from './UserStatsGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  const {
    error, loading,
  } = useFetch();

  useEffect(() => {
    const graphData = data.map((item) => ({
      x: item.title,
      y: Number(item.acessos),
    }));

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((acc, curr) => acc + curr),
    );
    setGraph(graphData);
  }, [data]);

  if (error) return <Error error={error} />;
  if (loading) return <Loader loading={loading} />;
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{
            top: 20, bottom: 20, left: 80, right: 80,
          }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;

UserStatsGraphs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
