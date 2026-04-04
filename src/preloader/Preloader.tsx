/*
 ** This component downloads all media resources upfront for use by other components.
 ** This component is never displayed.
 ** Children of this component are never displayed.
 ** Font requirements:
 ** HTML elements must have some text in them
 */

import styled from 'styled-components';
import BackgroundVideo from '@/pages/home/BackgroundVideo.tsx';
import config from '@/helpers/config.ts';

// GLOBALS
const { videos, poster } = config.header; // array of video objects

const StyledPreloader = styled.div`
  height: 0;
  width: 0;
  visibility: hidden;

  /* hide all children of this component */
  & * {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

const StyledHome = styled.div`
  & .page-font-loader {
    font-family: Wallpoet;
  }
  & .navbar-font-loader {
    font-family: Orbitron;
  }
`;

const StyledExperience = styled.div`
  & .page-font-loader {
    font-family: Roboto;
  }
`;

const StyledTech = styled.div`
  /* the same font as in 'experience' */
`;

const StyledAbout = styled.div`
  & .page-font-loader {
    font-family: 'Cairo';
  }
  & .navbar-font-loader {
    font-family: 'Racing Sans One';
  }
`;

const StyledContact = styled.div`
  & .page-font-loader {
    font-family: Raleway;
  }
`;

const Preloader = () => (
  <StyledPreloader className="preloader">
    {/*  */}
    {/* NAVBAR ICONS - possibly an unnecessary operation as they are downloaded as a stylesheet, not fonts, and load fast anyway  */}
    <div className="icon-preloader">
      <i className="material-icons">home</i>
      <i className="material-icons">work</i>
      <i className="material-icons">build</i>
      <i className="material-icons">person</i>
      <i className="material-icons">email</i>
    </div>

    {/* HOME */}
    <StyledHome className="home-preloader">
      <div className="page-font-loader">Invisible Text</div>
      <div className="navbar-font-loader">Invisible Text</div>
      <BackgroundVideo
        inactive /* inactive inside preloader */
        videos={videos} /* video objects */
        poster={poster}
        preload="auto"
        muted="muted"
      />
      <img src={poster} alt="" />
    </StyledHome>

    {/* EXPERIENCE */}
    <StyledExperience className="experience-preloader">
      <div className="page-font-loader">Invisible Text</div>
      <img src="cahee-square.jpg" alt="" />
      <img src="cahee-rectangle.jpg" alt="" />
      <img src="roofland-square.jpg" alt="" />
      <img src="roofland-rectangle.jpg" alt="" />
      <img src="meals-square.jpg" alt="" />
      <img src="meals-rectangle.jpg" alt="" />
    </StyledExperience>

    {/* TECH */}
    <StyledTech className="tech-preloader">
      <img src="wall.jpg" alt="" />
    </StyledTech>

    {/* ABOUT */}
    <StyledAbout className="about-preloader">
      <div className="page-font-loader">Invisible Text</div>
      <div className="navbar-font-loader">Invisible Text</div>
      <img src={config.about.backgroundImage} alt="" />
      <img src={config.about.noiseImage} alt="" />
    </StyledAbout>

    {/* CONTACT */}
    <StyledContact className="contact-preloader">
      <div className="page-font-loader">Invisible Text</div>
      <img src="bg-dots.png" alt="" />
    </StyledContact>
  </StyledPreloader>
);

export default Preloader;
