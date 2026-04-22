import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import styled from 'styled-components';
import ChatBot from '@/components/chat/chat.ts';

interface Message {
  type: 'Q' | 'A';
  text: string;
}

interface BubbleProps {
  isQuestion: boolean;
}

const ChatWrapper = styled.div`
  max-width: 500px;
  margin: 20px auto;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 450px;
  background-color: #fdfdfd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MessageArea = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Bubble = styled.div<BubbleProps>`
  max-width: 85%;
  padding: 10px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
  align-self: ${(props) => (props.isQuestion ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isQuestion ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isQuestion ? 'white' : '#333')};
  border-bottom-right-radius: ${(props) => (props.isQuestion ? '2px' : '18px')};
  border-bottom-left-radius: ${(props) => (props.isQuestion ? '18px' : '2px')};
`;

const InputSection = styled.form`
  display: flex;
  padding: 15px;
  border-top: 1px solid #eee;
  background: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const TextBox = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 0 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default function ChatBox() {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    console.log('in handleSubmit ');

    e.preventDefault();
    if (!input.trim()) return;

    const response = await ChatBot.sendPrompt(input);
    console.log(response);
    const responseBody = JSON.parse(response.body).response;
    console.log(responseBody);
    const userQuestion: Message = { type: 'Q', text: input.trim() };
    const botReply: Message = { type: 'A', text: responseBody };

    setHistory((prev) => [...prev, userQuestion, botReply]);
    setInput('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <ChatWrapper>
      <MessageArea>
        {history.map((item, index) => (
          <Bubble key={index} isQuestion={item.type === 'Q'}>
            {item.text}
          </Bubble>
        ))}
      </MessageArea>

      <InputSection onSubmit={handleSubmit}>
        <TextBox
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask a question..."
        />
        <SendButton type="submit" disabled={!input.trim()}>
          Send
        </SendButton>
      </InputSection>
    </ChatWrapper>
  );
}
