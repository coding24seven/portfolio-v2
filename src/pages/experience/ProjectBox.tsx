/*
 ** a box containing one project
 */

import styled from 'styled-components';
import themes from '@/components/navbar/navbarButton-themes.tsx';
import config from '@/helpers/config.ts';
import ImageLink from '@/pages/experience/ImageLink.tsx';
import CheckProjectButton from '@/pages/experience/CheckProjectButton.tsx';

const em = config.em.bind(config);

const StyledProjectbox = styled.figure`
  max-height: 50rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: white;
  font-family: 'Roboto', sans-serif;
  border-radius: ${themes.large.borderRadius};
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 1px 10px 0 rgba(0, 0, 0, 0.08);

  @media (max-width: ${em(1100)}em) {
    border-radius: ${themes.medium.borderRadius};
  }
  @media (max-width: ${em(1000)}em) {
    max-height: 40rem;
  }
  @media (max-width: ${em(850)}em) {
    margin-bottom: 3rem;
    flex-direction: column;
    max-height: 100rem; /* imprecise value */
  }
  @media (max-width: ${em(500)}em) {
    margin-bottom: 1rem;
    border-radius: ${themes.small.borderRadius};
  }

  /* reorder the side-by-side halves inside the project box */
  &:nth-child(even) {
    & a {
      order: -1;
    }
  }
`; /* styled project box ends */

// LINK FILLED WITH AN IMAGE - HALF OF THE PROJECT BOX
const PositionedImageLink = styled(ImageLink)`
  width: 50%;

  &.rectangular-image-link {
    display: none;
  }

  @media (max-width: ${em(850)}em) {
    &.rectangular-image-link {
      display: block;
      width: 100%;
      order: -1; /* puts image-link above figcaption */
    }
    &.square-image-link {
      display: none;
    }
  }
`;

//. STYLED FIGCAPTION - HALF OF THE PROJECT BOX
const StyledFigCaption = styled.figcaption`
  padding: 2.2rem;
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${em(850)}em) {
    width: 100%;
  }

  /* heading */
  & h2 {
    font-size: 4rem;
    letter-spacing: 0.2rem;
    color: #2b2b2b;
    @media (max-width: ${em(850)}em) {
      justify-self: center;
      font-size: 3rem;
    }
    @media (max-width: ${em(500)}em) {
      font-size: 2.4rem;
    }
  }

  & .description {
    margin-top: 2rem;
  }

  & .technologies {
    //
  }

  /* description and technologies */
  & .description,
  & .technologies {
    margin-top: 2rem;
    color: #a4a4a4;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    @media (max-width: ${em(500)}em) {
      letter-spacing: 0;
      font-size: 1.5rem;
    }
  }
`;

const PositionedCheckProjectButton = styled(CheckProjectButton)`
  margin-top: 3.4rem;
  align-self: center;

  @media (max-width: ${em(850)}em) {
    margin-top: 2.4rem;
  }
`;

export default function ProjectBox(props) {
  const {
    heading,
    description,
    technologies,
    siteUrl,
    githubUrl,
    squareImagePath,
    rectangularImagePath,
  } = props.project;

  return (
    <StyledProjectbox>
      <StyledFigCaption>
        <h2>{heading}</h2>
        <p className="description">{description}</p>
        <p className="technologies">
          Technologies used: <span>{technologies}</span>
        </p>

        <PositionedCheckProjectButton
          className="positioned-button"
          siteUrl={siteUrl}
          githubUrl={githubUrl}
        />
      </StyledFigCaption>

      {/* only one image-link is shown at a time */}
      <PositionedImageLink
        className="square-image-link"
        siteUrl={siteUrl || githubUrl}
      >
        <img src={squareImagePath} alt="" />
      </PositionedImageLink>

      <PositionedImageLink
        className="rectangular-image-link"
        siteUrl={siteUrl || githubUrl}
      >
        <img src={rectangularImagePath} alt="" />
      </PositionedImageLink>
    </StyledProjectbox>
  );
}
