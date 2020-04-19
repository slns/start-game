import React from 'react';
import PropTypes from 'prop-types';

/** Component showing whether you won or lost and the button to restart */
const PlayAgain = (props) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

PlayAgain.propTypes = {
  /** Value to decide if lost game or win the game */
  gameStatus: PropTypes.string,

  /** Called when button is clicked */
  onClick: PropTypes.func.isRequired,
}

PlayAgain.defaultProps = {
  gameStatus: 'lost'
};

export default PlayAgain;