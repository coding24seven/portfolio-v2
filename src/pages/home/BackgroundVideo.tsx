/*
 ** Background video component.
 */

import { type SyntheticEvent, useId, useState } from 'react';
import styled from 'styled-components';
// import TransitioningContext from 'page-transition/TransitioningContext';

const StyledVideo = styled.video<{
  videoIsLoaded: boolean;
  playsInline: 'playsInline';
}>`
  opacity: ${({ videoIsLoaded }) => (videoIsLoaded ? 1 : 0)};
  object-fit: cover;
  ${({ poster }) => poster && `background-image : url(${poster});`}
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  transition: 1s;
`;

interface Props {
  handleVideoLoaded: () => void;
  /* inactive==true inside preloader, for example */
  inactive?: boolean;
  className: string;
  videos: any[];
  poster: string;
  preload: 'auto';
  autoPlay: 'autoPlay';
  loop: 'loop';
  muted: 'muted' /* not applied on soundless videos? */;
  playsInline: 'playsInline';
}

export default function BackgroundVideo(props: Props) {
  const useId1 = useId();
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);

  // static contextType = TransitioningContext;

  const handleLoadedData = (e) => {
    props.handleVideoLoaded();
    setVideoIsLoaded(true);
  };

  const handleError = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    /* Error source: browser unable to handle a list of unsupported video-file formats - ignore the error */

    /* Error source: mobile Android due to lack of user interaction */
    event.target?.load?.(); // resumes playing
  };

  const {
    /* inactive==true inside preloader, for example */
    inactive,
    className,
    videos,
    poster,
    preload,
    autoPlay,
    loop,
    muted /* not applied on soundless videos? */,
    playsInline,
  } = props;

  const sourceElements = videos.map((video, i) => (
    <source
      src={video.src}
      type={video.type}
      codecs={video.codecs}
      key={`${useId1}-${video.src}-${i}`}
    />
  ));

  const videoProps = {
    poster,
    muted,
    preload,
    autoPlay,
    loop,
    playsInline,
  };

  return (
    <StyledVideo
      className={className}
      onLoadedData={inactive ? () => {} : handleLoadedData}
      onError={inactive ? () => {} : handleError}
      {...videoProps}
      videoIsLoaded={videoIsLoaded}
    >
      {sourceElements}
    </StyledVideo>
  );
}
