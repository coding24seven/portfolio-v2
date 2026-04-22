import ChatBox from '@/components/chat/ChatBox.tsx';

export default function Chat(props: { pageTitle: string }) {
  const { pageTitle } = props;

  return (
    <section css={{ marginTop: '100px' }}>
      <title>{pageTitle}</title>
      <ChatBox />
    </section>
  );
}
