/* eslint-disable react/destructuring-assignment */
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  // roda uma vez para definir o estado inicial
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
      <PhotoCommentsForm
        single={props.single}
        id={props.id}
        setComments={setComments}
      />
      )}
    </>
  );
};

export default PhotoComments;

PhotoComments.defaultProps = {
  single: false,
};

PhotoComments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  single: PropTypes.bool,
  id: PropTypes.number.isRequired,
};
