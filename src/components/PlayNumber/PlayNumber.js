import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

/** Component to show the numbers buttons */
const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

PlayNumber.propTypes = {
  /** Value to decide if in use or available */
  status: PropTypes.string.isRequired,

  /** Value to show the number of the button */
  number: PropTypes.number.isRequired,

  /** Called when button is clicked */
  onClick: PropTypes.func.isRequired,
}

export default PlayNumber;
