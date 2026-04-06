import { createContext } from 'react';

export const pageSliderContext = createContext({
  pageSlideIsCompleted: true,
  setPageSlideIsCompleted: (_value: boolean) => {},
});
