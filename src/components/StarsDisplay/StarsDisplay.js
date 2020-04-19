import React from 'react';
import PropTypes from 'prop-types'

import utils from '../../utils/utils';

/** Component to show random stars */
const StarsDisplay = (props) => (
  // Equivalent to React.fragment
  <div>
    {utils.range(1, props.count).map((starId) => (
      <div key={starId} className="star" />
    ))}
  </div>
);

StarsDisplay.propTypes = {
  /** Value to show the stars */
  count: PropTypes.number.isRequired,
}

export default StarsDisplay;