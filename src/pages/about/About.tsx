import styled, { css, keyframes } from 'styled-components';
import config from '@/helpers/config.ts';
import colors from '@/helpers/colors.ts';

const em = config.em.bind(config);

const slideBackground = (top: string) => keyframes`
 0% {
    background-position: left ${top};
  }
  50% {
    background-position: right ${top};
  }
  100% {
    background-position: left ${top};
  }
`;

const StyledPage = styled.div`
  overflow-x: hidden;
  padding: 8rem 10rem 1rem 22rem;
  min-height: 100vh;
  --page-gradient: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.8));
  background-color: #95b596;
  background-image: url(${config.about.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  animation: ${config.about.backgroundAnimation
    ? css`
        ${slideBackground('0')} 40s linear infinite
      `
    : 'none'};

  & ::selection {
    background-color: ${colors.rgbForestGreen};
  }

  @media (max-width: ${em(1100)}em) {
    padding: 10.7rem 5rem 1rem 5rem;
  }
  @media (max-width: ${em(650)}em) {
    padding: 10.7rem 3rem 1rem;
  }
  @media (max-width: ${em(500)}em) {
    padding: 9.2rem 1rem 1rem;
  }

  & h1,
  & h2,
  & p {
    margin-bottom: 3rem;
    padding: 0.6rem 2rem 0.9rem 2rem;
    background-image: url(${config.about.noiseImage});
    background-color: ${colors.rgbaGreyGreen};
    background-repeat: repeat;
    border-radius: 2rem;
    box-shadow: 0 0 0.1rem ${colors.rgbaGreyGreen};
    font-size: 1.9rem;
    font-weight: 300;
    font-family: 'Cairo', cursive;
    letter-spacing: 0.1rem;
    line-height: 1.3;
    @media (max-width: ${em(500)}em) {
      font-size: 1.8rem;
    }
  }

  @media (max-width: ${em(1100)}em) {
    background-position: center top;
    animation: ${config.about.backgroundAnimation
      ? css`
          ${slideBackground('top')} 40s linear infinite
        `
      : 'none'};
  }
  @media (max-width: ${em(500)}em) {
    background-position: center top;
    animation: ${config.about.backgroundAnimation
      ? css`
          ${slideBackground('top')} 60s linear infinite
        `
      : 'none'};
  }
`;

const StyledHeadingBox = styled.section`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  @media (max-width: ${em(500)}em) {
    flex-direction: column;
  }

  & h1,
  h2 {
    color: rgba(255, 255, 255, 0.8);
    @media (max-width: ${em(500)}em) {
      width: 100%;
    }

    & span {
      font-weight: 400;
    }
  }

  & .heading1 {
    margin-right: 3rem;
    @media (max-width: ${em(500)}em) {
      margin-right: 0;
    }
  }
`;

const StyledParagraphBox = styled.section`
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > p {
    color: rgba(255, 255, 255, 0.9);
  }

  /* my name */
  & > .signature {
    margin-bottom: 1rem;
    align-self: flex-end;
    transform: translateY(-3rem);
    @media (max-width: ${em(400)}em) {
      transform: translateY(-2rem);
    }
  }
`;

export default function About({ pageTitle }) {
  const AboutPage = (
    <StyledPage>
      <title>{pageTitle}</title>
      <StyledHeadingBox>
        <h1 className="heading1">
          <span>Edward Snowden</span> said,{' '}
          <q>
            I was reminded of what is perhaps the fundamental rule of
            technological progress: if something can be done, it probably will
            be done, and possibly already has been.
          </q>
        </h1>
        <h2 className="heading2">
          I said "How about doing all that and more in NodeJS plus VueJS or
          ReactJS?"
        </h2>
      </StyledHeadingBox>

      <StyledParagraphBox>
        <p className="paragraph1">
          Talking of which, I tend to indulge in clean and well-documented code,
          epic adventure, and tuning into the kind of music that fuels my
          passion for quality and efficiency in everything I do.
        </p>

        <p className="paragraph2">
          So, if you need help with your project, please get in touch. Should we
          decide to work together, I'll do my best to help your business run
          like clockwork by coding websites that people cannot help but go back
          to.
        </p>

        <p className="paragraph3">See you out there.</p>

        <p className="signature">Arek</p>
      </StyledParagraphBox>
    </StyledPage>
  );

  // return <Page>{AboutPage}</Page>;
  return AboutPage;
}
