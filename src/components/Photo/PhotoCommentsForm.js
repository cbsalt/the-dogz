import React, { useState } from 'react';

import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';
import { ReactComponent as Submit } from '../../assets/enviar.svg';
import { COMMENT_POST } from '../../api';

import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
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
    <form className={styles.form} onSubmit={handleSubmit}>
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
