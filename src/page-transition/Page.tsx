import React, { useContext } from 'react';
import TransitioningContext from 'page-transition/TransitioningContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import config from '@/helpers/config.ts';

const { pageTransitionDuration, pageTransitionDelay } = config;

const StyledSection = styled.section`
  --transition-type: ease;

  --delay: ${pageTransitionDelay / 1000}s; /* ms to s */

  --duration: ${(pageTransitionDuration - pageTransitionDelay) /
  1000}s; /* ms to s */

  /* supposedly improves the smoothness */
  will-change: transform, position;

  /* prevent width collapse while position: fixed */
  width: 100%;

  position: ${({ hasTransitioned }) => (hasTransitioned ? 'static' : 'fixed')};

  /* this might be helping... */
  min-height: ${({ hasTransitioned }) => (hasTransitioned ? 'auto' : '100vh')};

  transition: transform var(--duration) var(--delay) var(--transition-type);

  /* inner page general rules */
  & .page__inner {
    /* transition: transform var(--duration) var(--transition-type); */
  }

  /* This fires as soon as the element enters the DOM */
  &.page-enter {
    transform: translateX(-100%);

    & .page__inner {
      /* opacity: 0.8; */
    }
  }

  /* This is where you add the transition*/
  &.page-enter-active {
    transform: translateX(0);

    & .page__inner {
      /* opacity: 1; */
    }
  }

  &.page-rightist.page-enter {
    transform: translateX(100%);
  }

  &.page-rightist.page-enter-active {
    transform: translateX(0);
  }

  &.page-rightist.page-exit {
    transform: translateX(100%);
  }

  /* just show up as in after page reload */
  &.page-centrist {
    transform: translateX(0);
  }

  &.page-exit {
    transform: translateX(-100%);

    & .page__inner {
      /* opacity: 0.8; */
    }
  }
`;

function Page({ children, location: { state } }) {
  //
  // true once the page has transitioned
  const hasTransitioned = useContext(TransitioningContext);

  // for the outgoing page, 'state' may not exist at the start of a new browser session
  const linkName = state ? state.linkName : '';
  const previousPageName = state ? state.previousPageName : '';

  // get the page from 'window.location.pathname'
  const pageNameFromUrlBar = config.extractPageNameFromUrl(
    window.location.pathname,
  );

  const pageIsIncoming = pageNameFromUrlBar === linkName;

  // no previous page exist, as in after page reload
  const pageIsCentrist = !previousPageName;

  // will the page slide from/to the right?
  const pageIsRightist =
    // for the incoming page
    (!pageIsCentrist &&
      pageIsIncoming &&
      config.getPageIndex(linkName) > config.getPageIndex(previousPageName)) ||
    // for the outgoing page
    (!pageIsIncoming &&
      config.getPageIndex(linkName) > config.getPageIndex(pageNameFromUrlBar));

  const classes = classNames({
    page: true,
    'page-rightist': pageIsRightist,
    'page-centrist': pageIsCentrist,
  });

  // console.log("-----------");
  // console.log("transitionerId:", window.transitionerId);
  // console.log("pageIsIncoming:", pageIsIncoming);
  // console.log("linkName:", linkName);
  // console.log(
  //   "previousPageName:",
  //   previousPageName,
  //   " - useless for outgoing page"
  // );
  // console.log("pageIsRightist:", pageIsRightist);
  // console.log("-----------");

  return (
    <StyledSection hasTransitioned={hasTransitioned} className={classes}>
      <div className="page__inner">{children}</div>
    </StyledSection>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRouter(Page);
