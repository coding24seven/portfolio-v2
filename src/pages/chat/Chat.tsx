import ChatBox from '@/components/chat/ChatBox.tsx';

export default function Chat(props: { pageTitle: string }) {
  const { pageTitle } = props;

  return (
    <>
      <title>{pageTitle}</title>
      <ChatBox />
    </>
  );
}
