import styled, { keyframes, css } from 'styled-components';
import { rgba } from 'polished';

import limeLight from '../Theme/limeLight';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  text-indent: -9999em;

  ${({ thickness, color, speed }) => css`
    border-top: ${thickness}px solid ${color};
    border-right: ${thickness}px solid ${color};
    border-bottom: ${thickness}px solid ${color};
    border-left: ${thickness}px solid ${rgba(color, 0.1)};

    animation: ${loaderAnimation} ${speed}s infinite linear;
  `};

  transform: translateZ(0);

  &,
  &:after {
    border-radius: 50%;
    ${({ size }) => `
      width: ${limeLight.loader.width[size]};
      height: ${limeLight.loader.height[size]};
    `}
  }
`;

export default LoaderContainer;
