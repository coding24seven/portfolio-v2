import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import config from '@/helpers/config.ts';
import { routes } from '@/router/routes.ts';
import Navbar from '@/components/navbar/Navbar.tsx';
import '@/app/App.css';
import PageSlider from '@/page-slider/PageSlider.tsx';

const App = () => {
  const [themeSize, setThemeSize] = useState('large');
  const location = useLocation();

  const currentPageName = config.extractPageNameFromUrl(location.pathname);

  useEffect(() => {
    const mqLarge = window.matchMedia(`(min-width: ${config.em(1100)}em)`);
    const mqMedium = window.matchMedia(
      `(min-width: ${config.em(501)}em) and (max-width: ${config.em(1100)}em)`,
    );

    const updateTheme = () => {
      setThemeSize(
        mqLarge.matches ? 'large' : mqMedium.matches ? 'medium' : 'small',
      );
    };

    updateTheme();
    mqLarge.addEventListener('change', updateTheme);
    mqMedium.addEventListener('change', updateTheme);

    return () => {
      mqLarge.removeEventListener('change', updateTheme);
      mqMedium.removeEventListener('change', updateTheme);
    };
  }, []);

  return (
    <div className="App">
      <Navbar currentPageName={currentPageName} themeSize={themeSize} />

      <PageSlider>
        <Routes location={location}>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.element pageTitle={route.pageTitle} />}
              slideBackground
            />
          ))}
        </Routes>
      </PageSlider>
    </div>
  );
};

export default App;
