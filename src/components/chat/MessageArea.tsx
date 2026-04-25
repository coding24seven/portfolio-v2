import { type ReactNode, type RefObject } from 'react';

const wrapperStyles = {
  flex: 1,
  padding: '15px 0 15px 15px',
  overflow: 'hidden',
};

const scrollAreaStyles = () => ({
  height: '100%',
  overflowY: 'auto' as const,
  display: 'flex' as const,
  flexDirection: 'column' as const,
  gap: 12,
  paddingRight: 15,
});

type Props = {
  children: ReactNode;
  scrollRef: RefObject<HTMLDivElement | null>;
};

export const MessageArea = ({ children, scrollRef }: Props) => {
  return (
    <section css={wrapperStyles}>
      <div ref={scrollRef} css={scrollAreaStyles()}>
        {children}
      </div>
    </section>
  );
};
