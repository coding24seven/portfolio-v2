import { type ChangeEvent, useActionState, useState } from 'react';
import styled from 'styled-components';
import ChatBot from '@/components/chat/chat.ts';
import colors from '@/helpers/colors.ts';
import { Bubble } from '@/components/chat/Bubble.tsx';
import { SendButton } from '@/components/chat/SendButton.tsx';

interface Message {
  type: 'Q' | 'A';
  text: string;
}

const ChatWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border: 1px solid ${colors.hexGold};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 450px;
  background-color: #fdfdfd;
`;

const MessageArea = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormSection = styled.form`
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

async function sendMessageAction(
  prevState: { messages: Message[] },
  formData: FormData,
): Promise<{ messages: Message[] }> {
  const input = formData.get('message') as string;
  const response = await ChatBot.sendPrompt(input);
  const responseBody = JSON.parse(response.body).response;
  const userQuestion: Message = { type: 'Q', text: input };
  const botReply: Message = { type: 'A', text: responseBody };
  return {
    ...prevState,
    messages: [...prevState.messages, userQuestion, botReply],
  };
}

export default function ChatBox() {
  const [input, setInput] = useState<string>('');
  const [state, formAction, isPending] = useActionState(sendMessageAction, {
    messages: [],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendButtonIsDisabled = isPending || !input.trim();

  return (
    <ChatWrapper>
      <MessageArea>
        {state.messages.map((item: Message, index: number) => (
          <Bubble key={index} isQuestion={item.type === 'Q'}>
            {item.text}
          </Bubble>
        ))}
      </MessageArea>

      <FormSection action={formAction}>
        <InputBox
          type="text"
          name="message"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask a question..."
        />
        <SendButton disabled={sendButtonIsDisabled}>Send</SendButton>
      </FormSection>
    </ChatWrapper>
  );
}
