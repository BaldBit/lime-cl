import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash-es/noop';

import ButtonContainer from './styled';

const Button = (props) => {
  const { value, mode, size, disabled, loading, fluid, onClick, ...otherProps } = props;

  return (
    <ButtonContainer {...otherProps} mode={mode} size={size} disabled={disabled} fluid={fluid} onClick={onClick}>
      {value}
    </ButtonContainer>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['regular', 'big']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fluid: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: 'primary',
  size: 'regular',
  disabled: false,
  loading: false,
  fluid: false,
  onClick: noop,
};

export default Button;
