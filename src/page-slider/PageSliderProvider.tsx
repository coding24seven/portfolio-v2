import { type ReactNode, useState } from 'react';
import { pageSliderContext } from './page-slider-context';

interface Props {
  children: ReactNode;
}

export function PageSliderProvider({ children }: Props) {
  const [pageSlideIsCompleted, setPageSlideIsCompleted] = useState(true);

  return (
    <pageSliderContext.Provider
      value={{
        pageSlideIsCompleted,
        setPageSlideIsCompleted,
      }}
    >
      {children}
    </pageSliderContext.Provider>
  );
}
