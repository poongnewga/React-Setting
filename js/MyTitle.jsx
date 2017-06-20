import React from 'react';
import PropTypes from 'prop-types';

const MyTitle = props => {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>
        {props.title}
      </h1>
    </div>
  );
};

MyTitle.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};

MyTitle.defaultProps = {
  color: '',
  title: ''
};

export default MyTitle;
