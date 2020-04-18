import React from 'react';

import utils from '../utils/math-utils';
//import '../../styles/index.scss';

const StarsDisplay = (props) => (
  // Equivalent to React.fragment
  <div>
    {utils.range(1, props.count).map((starId) => (
      <div key={starId} className="star" />
    ))}
  </div>
);

export default StarsDisplay;