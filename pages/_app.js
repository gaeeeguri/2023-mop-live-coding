import Main from '../components/layouts/main';
import Fonts from '../components/fonts';
import { AnimatePresence } from 'framer-motion';
import Chakra from '../components/chakra';
import { Analytics } from '@vercel/analytics/react';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const App = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
          <Analytics />
        </AnimatePresence>
      </Main>
    </Chakra>
  );
};

export default App;
