import Home from '@/pages/home/Home.tsx';
import Experience from '@/pages/experience/Experience.tsx';
import Tech from '@/pages/tech/Tech.tsx';
import About from '@/pages/about/About.tsx';
import Contact from '@/pages/contact/Contact.tsx';

export const routes = [
  { path: '/', element: Home, pageTitle: 'Home' },
  { path: '/experience', element: Experience, pageTitle: 'Experience' },
  { path: '/tech', element: Tech, pageTitle: 'Tech' },
  { path: '/about', element: About, pageTitle: 'About' },
  { path: '/contact', element: Contact, pageTitle: 'Contact' },
];
