import { type ReactNode } from 'react';
import colors from '@/helpers/colors.ts';

interface BubbleProps {
  isQuestion: boolean;
  children: ReactNode;
}

const bubbleStyles = (isQuestion: boolean) => ({
  maxWidth: '85%',
  padding: '10px 16px',
  fontSize: '1.6rem',
  lineHeight: 1.5,
  alignSelf: isQuestion ? 'flex-end' : 'flex-start',
  backgroundColor: isQuestion ? colors.hexVioletAlpha : '#f0f0f0',
  borderRadius: '18px',
  color: isQuestion ? 'white' : colors.rgbBlackFont,
  borderBottomRightRadius: isQuestion ? '2px' : '18px',
  borderBottomLeftRadius: isQuestion ? '18px' : '2px',
});

export const Bubble = ({ isQuestion, children }: BubbleProps) => {
  return <div css={bubbleStyles(isQuestion)}>{children}</div>;
};
