import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash-es/noop';

import Loader from '../Loader/Loader';
import { ButtonContainer, LoaderContainer } from './styled';

const Button = (props) => {
  const { value, mode, size, disabled, loading, fluid, onClick, ...otherProps } = props;

  return (
    <ButtonContainer {...otherProps} mode={mode} size={size} disabled={disabled} fluid={fluid} onClick={onClick}>
      {loading && (
        <LoaderContainer>
          <Loader size={size} />
        </LoaderContainer>
      )}
      {value}
    </ButtonContainer>
  );
};

Button.propTypes = {
  /**
   * @property {string} value - Text to display on the button element
   */
  value: PropTypes.string.isRequired,
  /**
   * Text to display on the button element
   * @property {string} [mode=primary] - Set style of the button
   */
  mode: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
  /**
   * Text to display on the button element
   * @property {string} [size=regular] - Set the size of the button
   */
  size: PropTypes.oneOf(['regular', 'big']),
  /**
   * @property {boolean} [disabled=false] - Set the disable property of the button element
   */
  disabled: PropTypes.bool,
  /**
   * @property {boolean} [loading=false] - Show the Loading component
   */
  loading: PropTypes.bool,
  /**
   * @property {boolean} [fluid=false] - Stretch the button to it's parent's width
   */
  fluid: PropTypes.bool,
  /**
   * @param {Button~buttonOnClickCallback} onClick - The callback that invoke when click on the button
   */
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

/**
 * Button click callback
 * @callback buttonOnClickCallback
 * @param {object} event
 */
