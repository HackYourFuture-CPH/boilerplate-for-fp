import React from 'react';
import PropTypes from 'prop-types';
import './SampleComponent.styles.css';

export default function SampleComponent({ title, onClick, children }) {
  return (
    <div className="sample-component">
      <h2>{title}</h2>
      <p>(this is a sample component)</p>
      {children}
      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

SampleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

SampleComponent.defaultProps = {
  onClick: null,
  children: null,
};
