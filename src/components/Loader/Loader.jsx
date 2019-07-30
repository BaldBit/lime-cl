import React from 'react';
import PropTypes from 'prop-types';

import limeLight from '../Theme/limeLight';

import LoaderContainer from './styled';

const Loader = (props) => {
  const { size, speed, thickness, color } = props;

  return <LoaderContainer size={size} speed={speed} thickness={thickness} color={color} />;
};

Loader.propTypes = {
  /**
   * @property {string} [size=regular] - Set the size of the Loader component
   */
  size: PropTypes.oneOf(['regular', 'big']),
  /**
   * @property {number} speed - Set the animation speed
   */
  speed: PropTypes.number,
  /**
   * @property {number} thickness - Set the thickness of the Loader component
   */
  thickness: PropTypes.number,
  /**
   * @property {string} color - Set the color of the spinning circle
   */
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 'regular',
  speed: limeLight.animation.medium,
  thickness: limeLight.loader.thickness,
  color: limeLight.colorLight,
};

export default Loader;
