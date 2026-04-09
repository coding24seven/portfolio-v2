import { useState } from 'react';
import styled from 'styled-components';
import config from '@/helpers/config.ts';
import Welcome from '@/pages/home/Welcome.tsx';
import BackgroundVideo from '@/pages/home/BackgroundVideo.tsx';
import LoadingIndicator from '@/pages/home/LoadingIndicator.tsx';
// import Page from '@/page-transition/Page.tsx';

const em = config.em.bind(config);
const { videos, poster } = config.header;

const StyledHomePage = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(${poster});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  & ::selection {
    background-color: transparent;
  }
`;
const PositionedLoadingIndicator = styled(LoadingIndicator)`
  opacity: 0;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 73%;
  transform: translate(-44%, -50%);
`;

const PositionedWelcome = styled(Welcome)`
  z-index: 1;

  /* <span> containing ' - ' */
  & .divider {
    /* when text breaks up across two lines */
    @media (max-width: ${em(700)}em) {
      display: none;
    }
  }
`;

const PositionedBackgroundVideo = styled(BackgroundVideo)`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
`;

interface Props {
  pageTitle: string;
}

export default function Home({ pageTitle }: Props) {
  const [videoLoaded, setVideoLoaded] = useState(true);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const HomePage = (
    <StyledHomePage>
      <title>{pageTitle}</title>
      <PositionedWelcome
        className="welcome-text"
        text1="Hi! I'm Arek"
        text2="a web developer"
      />
      {!videoLoaded && (
        <PositionedLoadingIndicator className="video-loading-indicator">
          Loading...
        </PositionedLoadingIndicator>
      )}
      <PositionedBackgroundVideo
        className="background-video"
        videos={videos}
        poster={poster}
        preload="auto"
        autoPlay="autoPlay"
        loop="loop"
        muted="muted"
        playsInline="playsInline"
        handleVideoLoaded={handleVideoLoaded}
      />
    </StyledHomePage>
  );

  return HomePage;
}
