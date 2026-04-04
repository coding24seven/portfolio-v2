/*
 ** An indicator that the video is loading
 */

import styled, { keyframes } from 'styled-components';
import config from '@/helpers/config.ts';

const em = config.em.bind(config);

const blink = () => keyframes`
  from {
    opacity: 0.2;
  }
  50% {
    opacity: .85;
  }
  to {
    opacity: 0.2
  }
  `;

const StyledLoadingIndicator = styled.h2`
  padding: 0.3rem 4rem;
  font-size: 2.9rem;
  font-weight: 300;
  color: #e2e2e2;
  font-family: Wallpoet;
  letter-spacing: 1.3rem;
  text-transform: uppercase;
  animation: ${blink} 4s 1.5s ease infinite;

  @media (max-width: ${em(1000)}em) {
    font-size: 2.7rem;
  }
  @media (max-width: ${em(500)}em) {
    font-size: 2.4rem;
  }
  @media (max-width: ${em(450)}em) {
    font-size: 2.1rem;
  }
`;

export default function LoadingIndicator({ className, children }) {
  return (
    <StyledLoadingIndicator className={className}>
      {children}
    </StyledLoadingIndicator>
  );
}
