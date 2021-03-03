import React from 'react';

import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';

import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleDelete() {
    const confirm = window.confirm('Deseja realmente excluir?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button type="submit" className={styles.delete} disabled>
          Excluir
        </button>
      ) : (
        <button type="submit" onClick={handleDelete} className={styles.delete}>
          Excluir
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
