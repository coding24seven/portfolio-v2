import { type ChangeEvent, type SubmitEvent } from 'react';
import styled from '@emotion/styled';
import colors from '@/helpers/colors.ts';
import { SendButton } from '@/components/chat/SendButton.tsx';

const Form = styled.form`
  display: flex;
  padding: 15px;
  border-top: 1px solid #eee;
  background: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const InputBox = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid ${colors.hexGold};
  border-radius: 20px;
  outline: none;
  &:focus {
    border-color: ${colors.hexVioletAlpha};
  }
`;

export interface ChatFormProps {
  input: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  disabled: boolean;
}
export const ChatForm = ({
  input,
  onChange,
  onSubmit,
  disabled,
}: ChatFormProps) => (
  <Form onSubmit={onSubmit}>
    <InputBox
      type="text"
      value={input}
      onChange={onChange}
      placeholder="Ask a question..."
    />
    <SendButton disabled={disabled}>Send</SendButton>
  </Form>
);
