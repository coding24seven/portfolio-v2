import ChatBox from '@/components/chat/ChatBox.tsx';
import config from '@/helpers/config.ts';

const em = config.em.bind(config);

function getCss() {
  return {
    minHeight: '100vh',
    padding: '13rem 3rem 3rem 16rem',
    backgroundColor: '#fafafa',
    [`@media (max-width: ${em(1100)}em)`]: {
      padding: '10.7rem 3rem 3rem 3rem',
    },
    [`@media (max-width: ${em(650)}em)`]: {
      padding: '10.7rem 3rem',
    },
    [`@media (max-width: ${em(500)}em)`]: {
      padding: '8.2rem 1rem',
    },
    [`@media (max-width: ${em(400)}em)`]: {
      paddingTop: '7.2rem',
    },
  };
}

const css = getCss();

export default function Chat(props: { pageTitle: string }) {
  const { pageTitle } = props;

  return (
    <section css={css}>
      <title>{pageTitle}</title>
      <ChatBox />
    </section>
  );
}
