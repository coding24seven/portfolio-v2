import { type MouseEvent, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import config from '@/helpers/config.ts';
import Navbar from '@/components/navbar/Navbar.tsx';
import Home from '@/pages/home/Home.tsx';
import Experience from '@/pages/experience/Experience.tsx';
import Tech from '@/pages/tech/Tech.tsx';
import About from '@/pages/about/About.tsx';
import Contact from '@/pages/contact/Contact.tsx';

const { pageTransitionDurationMs } = config;

const App = () => {
  const [themeSize, setThemeSize] = useState('large');
  const [pageHasTransitioned, setPageHasTransitioned] = useState(true);
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

  const handleNavLinkClick = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (pageHasTransitioned) {
      setPageHasTransitioned(false);
      setTimeout(() => {
        setPageHasTransitioned(true);
      }, pageTransitionDurationMs + 260);
    } else {
      event?.preventDefault();
    }
  };

  useEffect(() => {
    const handlePopState = () => handleNavLinkClick();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handleNavLinkClick, pageHasTransitioned]);

  return (
    <div className="App">
      <Navbar
        currentPageName={currentPageName}
        themeSize={themeSize}
        handleNavLinkClick={handleNavLinkClick}
      />

      <Routes>
        <Route path="/" element={<Home pageTitle="Home" />} />
        <Route
          path="/experience"
          element={<Experience pageTitle="Experience" />}
        />
        <Route path="/tech" element={<Tech pageTitle="Tech" />} />
        <Route path="/about" element={<About pageTitle="About" />} />
        <Route path="/contact" element={<Contact pageTitle="Contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
