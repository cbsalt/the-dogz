import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import { ReactComponent as Submit } from '../../assets/enviar.svg';
import { COMMENT_POST } from '../../api';

import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Digite seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button} type="submit">
        <Submit />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;

PhotoCommentsForm.defaultProps = {
  single: false,
};

PhotoCommentsForm.propTypes = {
  id: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
  single: PropTypes.bool,
};
