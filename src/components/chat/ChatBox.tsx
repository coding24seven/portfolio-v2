import {
  type ChangeEvent,
  type SubmitEvent,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react';
import styled from '@emotion/styled';
import ChatBot from '@/components/chat/chat.ts';
import colors from '@/helpers/colors.ts';
import { Bubble } from '@/components/chat/Bubble.tsx';
import { MessageArea } from '@/components/chat/MessageArea.tsx';
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

export default function ChatBox() {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollAreaRef.current) {
      return;
    }

    scrollAreaRef.current.scrollTo({
      top: scrollAreaRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [history]);

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuestion: Message = { type: 'Q', text: input.trim() };
    setInput('');
    setHistory((prev) => [...prev, userQuestion]);

    startTransition(async () => {
      const response = await ChatBot.sendPrompt(input);
      const responseBody = JSON.parse(response.body).response;
      const botReply: Message = { type: 'A', text: responseBody };

      setHistory((prev) => [...prev, botReply]);
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const sendButtonIsDisabled = isPending || !input.trim();

  return (
    <ChatWrapper>
      <MessageArea scrollRef={scrollAreaRef}>
        {history.map((item, index) => (
          <Bubble key={index} isQuestion={item.type === 'Q'}>
            {item.text}
          </Bubble>
        ))}
      </MessageArea>

      <Form onSubmit={handleSubmit}>
        <InputBox
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask a question..."
        />
        <SendButton disabled={sendButtonIsDisabled}>Send</SendButton>
      </Form>
    </ChatWrapper>
  );
}
