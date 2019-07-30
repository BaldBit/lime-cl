import styled from 'styled-components';
import { darken } from 'polished';

import limeLight from '../Theme/limeLight';

// get color mode for the button based on the disabled prop
const getColor = (disabled) => (disabled ? limeLight.colorGrayMedium : limeLight.colorPrimaryOne);

const getButtonMode = (mode, disabled) => {
  let css = '';

  if (mode === 'primary') {
    css = `
      background-color: ${getColor(disabled)};
      border-color: ${getColor(disabled)};
      color: ${limeLight.colorLight};

      ${
        !disabled
          ? `
        &:hover {
          background-color: ${darken(0.05, limeLight.colorPrimaryOne)};
          border-color: ${darken(0.05, limeLight.colorPrimaryOne)};
        }
      `
          : ''
      }
    `;
  } else if (mode === 'secondary') {
    css = `
      border-color: ${getColor(disabled)};
      color: ${getColor(disabled)};

      ${
        !disabled
          ? `
        &:hover {
          border-color: ${darken(0.2, limeLight.colorPrimaryOne)};
          color: ${darken(0.2, limeLight.colorPrimaryOne)};
        }
      `
          : ''
      }
    `;
  }

  return css;
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
  transition: 0.3s border-color, 0.3s background-color, 0.3s color, 0.3s outline-color;

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

const LoaderContainer = styled.span`
  margin-right: 5px;
`;

export { ButtonContainer, LoaderContainer };
