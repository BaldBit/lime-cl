import styled, { css } from 'styled-components';
import { darken } from 'polished';

import limeLight from '../Theme/limeLight';

// get color mode for the button based on the disabled prop
const getColor = (disabled) => disabled ? limeLight.colorGrayMedium : limeLight.colorPrimaryOne;

const getButtonMode = (mode, disabled) => {
  if (mode === 'primary') {
    return `
      background-color: ${getColor(disabled)};
      border-color: ${getColor(disabled)};
      color: ${limeLight.colorLight};

      ${!disabled ? `
        &:hover {
          background-color: ${darken(0.05, limeLight.colorPrimaryOne)};
          border-color: ${darken(0.05, limeLight.colorPrimaryOne)};
        }
      ` : ''}
    `;
  } else if (mode === 'secondary') {
    return `
      border-color: ${getColor(disabled)};
      color: ${getColor(disabled)};

      ${!disabled ? `
        &:hover {
          border-color: ${darken(0.2, limeLight.colorPrimaryOne)};
          color: ${darken(0.2, limeLight.colorPrimaryOne)};
        }
      ` : ''}
    `;
  }
};

const ButtonContainer = styled.button`
  display: inline-flex;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  outline: 1px dotted transparent;
  outline-offset: 2px;
  justify-content: center;
  align-items: center;
  transition: .3s border-color, .3s background-color, .3s color, .3s outline-color;

  &:focus {
    outline-color: ${limeLight.colorGrayDark};
  }

  ${({ size, fluid, mode, disabled }) => `
    font-size: ${limeLight.fontSize[size]};
    padding: ${limeLight.button.padding[size]};
    ${fluid ? 'width: 100%' : ''};
    border-radius: ${limeLight.button.borderRadius[size]};
    ${getButtonMode(mode, disabled)};
  `}
`;

export default ButtonContainer;
