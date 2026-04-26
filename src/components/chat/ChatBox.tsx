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
import { Bubble } from '@/components/chat/Bubble.tsx';
import { MessageArea } from '@/components/chat/MessageArea.tsx';
import { ChatForm } from '@/components/chat/ChatForm.tsx';

interface Message {
  type: 'Question' | 'Answer' | 'PendingAnswer';
  text: string;
}

const ChatWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 450px;
  background-color: #7f6878;
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

    const userQuestion: Message = { type: 'Question', text: input.trim() };
    const botAnswerPlaceholder: Message = {
      type: 'PendingAnswer',
      text: 'Bot is thinking',
    };
    setInput('');
    setHistory((prev) => [...prev, userQuestion, botAnswerPlaceholder]);

    startTransition(async () => {
      const response = await ChatBot.sendPrompt(input);
      const responseBody = JSON.parse(response.body).response;
      const botReply: Message = { type: 'Answer', text: responseBody };

      setHistory((prev) => [...prev.slice(0, -1), botReply]);
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
          <Bubble
            key={index}
            isQuestion={item.type === 'Question'}
            isPending={item.type === 'PendingAnswer'}
          >
            {item.text}
          </Bubble>
        ))}
      </MessageArea>

      <ChatForm
        input={input}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        disabled={sendButtonIsDisabled}
      />
    </ChatWrapper>
  );
}
