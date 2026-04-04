/*
 ** A welcome message such as 'Hi, I'm Arek - a web developer'
 */

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import config from '@/helpers/config.ts';

const em = config.em.bind(config);
const pageWidthThreshold = 700;

const animateCharacter = () => keyframes`
	100% {
    transform: rotate(0deg) translateY(0);
    opacity: 1;
    filter: blur(0);
	}
`;

const animateLine = () => keyframes`
  76% {
    transform: translateX(20px);
  }
  82% {
    transform: translateX(-20px);
  }
  88% {
    transform: translateX(10px);
  }
  94% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledAnimatableSection = styled.span`
  display: inline-block;
  white-space: pre; // so inline-block does not collapse empty space
  transform: rotate(60deg) translateY(-200px);
  opacity: 0;
  filter: blur(6px);
  animation: ${animateCharacter} 1s ease forwards;
`;

const StyledHeading = styled.h1`
  --welcome-box-shadow: 0 0.4rem 0.4rem -0.4rem white;

  position: absolute;
  padding: 0.3rem 4rem;
  font-size: 4.1rem;
  font-weight: 300;
  color: rgb(192, 225, 255);
  font-family: Wallpoet;

  @media (min-width: ${em(700)}em) {
    &:before {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-1600px);
      animation: ${animateLine} 0.4s forwards;
        forwards;
      animation-delay: 0.6s;
      content: "";
      box-shadow: var(--welcome-box-shadow);
    }
  }

  @media (max-width: ${em(1000)}em) {
    font-size: 3.9rem;
  }
  @media (max-width: ${em(800)}em) {
    font-size: 3.3rem;
  }
  @media (max-width: ${em(700)}em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    box-shadow: none;
  }
  @media (max-width: ${em(500)}em) {
    padding: 0.3rem 2rem;
    font-size: 3rem;
  }
  @media (max-width: ${em(450)}em) {
    padding: 0.3rem 1rem;
    font-size: 2.8rem;
  }

  /* <span> 'Hi! I'm...' */
  & .text-1 {
    position: relative;

    @media (max-width: ${em(700)}em) {
      padding: 0 3.4rem;

      &:before {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-1600px);
        animation: ${animateLine} 0.3s forwards;
          forwards;
        animation-delay: 1.55s;
        content: "";
        box-shadow: var(--welcome-box-shadow);
      }
    }
  }
`;

interface Props {
  text1: string;
  text2: string;
  className: string;
}

export default function Welcome({ text1, text2, className }: Props) {
  const [_, setForceRerender] = useState(false);

  const handleResize = () => {
    setForceRerender((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (window.outerWidth < pageWidthThreshold) {
    const text1tHtml = Array.from(text1).map((char, i) => (
      <StyledAnimatableSection
        key={i}
        style={{ animationDelay: `${(i / 31).toFixed(3)}s` }}
      >
        {char}
      </StyledAnimatableSection>
    ));
    const text2tHtml = Array.from(text2).map((char, i) => (
      <StyledAnimatableSection
        key={i}
        style={{ animationDelay: `${(0.7 + i / 31).toFixed(3)}s` }}
      >
        {char}
      </StyledAnimatableSection>
    ));

    return (
      <StyledHeading className={className}>
        <div className="text-1">{text1tHtml}</div>

        <div className="text-2">{text2tHtml}</div>
      </StyledHeading>
    );
  }

  const wholeText = `${text1} - ${text2}`;
  const allCharacters = Array.from(wholeText);
  const wholeTextHtml = allCharacters.map((char, i) => (
    <StyledAnimatableSection
      key={i}
      style={{ animationDelay: `${(i / 31).toFixed(3)}s` }}
    >
      {char}
    </StyledAnimatableSection>
  ));

  return <StyledHeading className={className}>{wholeTextHtml}</StyledHeading>;
}
