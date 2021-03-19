import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Head = (props) => {
  useEffect(() => {
    document.title = `${props.title} | Dogs`;
    document.querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, []);

  return (
    <div />
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
