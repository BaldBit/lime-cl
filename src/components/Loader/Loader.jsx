import React from 'react';
import PropTypes from 'prop-types';

import limeLight from '../Theme/limeLight';

import LoaderContainer from './styled';

const Loader = (props) => {
  const { size, speed, thickness, color } = props;

  return <LoaderContainer size={size} speed={speed} thickness={thickness} color={color} />;
};

Loader.propTypes = {
  size: PropTypes.oneOf(['regular', 'big']),
  speed: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 'regular',
  speed: limeLight.animation.medium,
  thickness: limeLight.loader.thickness,
  color: limeLight.colorLight,
};

export default Loader;
