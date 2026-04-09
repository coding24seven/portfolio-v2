import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router';
import App from '@/app/App.tsx';
import { PageSliderProvider } from '@/page-slider/PageSliderProvider.tsx';
import Preloader from '@/preloader/Preloader.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <Preloader />
    <BrowserRouter>
      <PageSliderProvider>
        <App />
      </PageSliderProvider>
    </BrowserRouter>
  </>,
);
