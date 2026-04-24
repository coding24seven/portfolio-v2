import type { ReactNode } from 'react';
import colors from '@/helpers/colors.ts';

interface SendButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const sendButtonStyles = (disabled?: boolean) => ({
  marginLeft: '10px',
  padding: '0 20px',
  backgroundColor: disabled ? '#ccc' : colors.hexGold,
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  fontWeight: 600,
  cursor: disabled ? 'not-allowed' : 'pointer',
  transition: 'background 0.2s',
  '&:hover': disabled
    ? {}
    : {
        backgroundColor: colors.hexVioletAlpha,
      },
});

export const SendButton = ({
  children,
  disabled,
  onClick,
}: SendButtonProps) => {
  return (
    <button
      type="submit"
      css={sendButtonStyles(disabled)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
