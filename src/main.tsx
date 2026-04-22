import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router';
import { PageSliderProvider } from '@/page-slider/PageSliderProvider.tsx';
import Preloader from '@/preloader/Preloader.tsx';
import { StrictMode } from 'react';
import App from '@/app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Preloader />
    <BrowserRouter>
      <PageSliderProvider>
        <App />
      </PageSliderProvider>
    </BrowserRouter>
  </StrictMode>,
);
