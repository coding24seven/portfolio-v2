import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Transitioner({ duration, children }) {
  useEffect(() => {
    window.transitionerId = Math.random().toString().replace(/0+\./, '');
  });

  return (
    <Route
      render={({ location }) => {
        const { pathname } = location;
        return (
          <TransitionGroup
            component={null} // prevent extra <div>
          >
            <CSSTransition
              key={pathname}
              classNames="page"
              mountOnEnter={true}
              timeout={{
                enter: duration,
                exit: duration,
              }}
            >
              <Route location={location} render={() => children} />
            </CSSTransition>
          </TransitionGroup>
        );
      }}
    />
  );
}
