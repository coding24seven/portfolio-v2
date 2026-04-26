import { type ReactNode } from 'react';
import colors from '@/helpers/colors.ts';
import { keyframes } from '@emotion/react';

interface BubbleProps {
  isQuestion: boolean;
  isPending?: boolean;
  children: ReactNode;
}

const ellipsisAnimation = keyframes`
  0%, 20% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const bubbleStyles = (isQuestion: boolean, isPending?: boolean) => ({
  maxWidth: '85%',
  padding: '10px 16px',
  fontSize: '1.6rem',
  lineHeight: 1.5,
  alignSelf: isQuestion ? 'flex-end' : 'flex-start',
  backgroundColor: isQuestion ? colors.hexVioletAlpha : colors.hexGold,
  borderRadius: '18px',
  color: 'white',
  borderBottomRightRadius: isQuestion ? '2px' : '18px',
  borderBottomLeftRadius: isQuestion ? '18px' : '2px',
  ...(isPending
    ? {
        '&::after': {
          marginLeft: '3px',
          display: 'inline-block',
          content: "'...'",
          animation: `${ellipsisAnimation} 1.4s infinite`,
        },
      }
    : {}),
});

export const Bubble = ({ isQuestion, isPending, children }: BubbleProps) => {
  return <div css={bubbleStyles(isQuestion, isPending)}>{children}</div>;
};
