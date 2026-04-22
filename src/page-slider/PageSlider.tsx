import { AnimatePresence, motion } from 'framer-motion';
import { type ReactNode, useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { pageSliderContext } from '@/page-slider/page-slider-context.ts';

const pageOrder = ['/', 'chat', '/experience', '/tech', '/about', '/contact'];

const variants = {
  // Where the new page starts on the x axis
  enter: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? '100%' : '-100%',
  }),
  // Where both pages end up (center)
  center: {
    x: 0,
  },
  // Where the previous page ends up on the x axis
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'left' ? '-100%' : '100%',
  }),
};

let previousPage = '';

export default function PageSlider({ children }: { children: ReactNode }) {
  const { setPageSlideIsCompleted } = useContext(pageSliderContext);
  const location = useLocation();
  const nextPage = location.pathname;

  useEffect(() => {
    previousPage = nextPage;
  });

  const direction =
    pageOrder.indexOf(nextPage) > pageOrder.indexOf(previousPage)
      ? 'left'
      : 'right';

  return (
    <AnimatePresence mode="popLayout" custom={direction}>
      <motion.section
        key={location.pathname}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ width: '100%' }}
        onAnimationStart={() => {
          setPageSlideIsCompleted(false);
        }}
        onAnimationComplete={(_definition) => {
          setPageSlideIsCompleted(true);
        }}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
