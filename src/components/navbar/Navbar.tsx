import styled from 'styled-components';
import config from '@/helpers/config.ts';
import NavbarButton from '@/components/navbar/NavbarButton.tsx';
import { pageSliderContext } from '@/page-slider/page-slider-context.ts';
import { useContext } from 'react';

const buttonWidth = config.navbar.vertical.button.width;
const em = config.em.bind(config);

const StyledNavbar = styled.nav<{ pageHasTransitioned: boolean }>`
  /* retract navbar off screen during transition */
  left: ${({ pageHasTransitioned }) =>
    pageHasTransitioned ? 0 : `-${buttonWidth}rem`};
  position: fixed;
  z-index: 666;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.08s 0.04s;

  @media (max-width: ${em(1100)}em) {
    width: 100%;
    top: 0;
    left: auto;
    transform: translateY(0);
    display: flex;
  }
`;

interface NavbarProps {
  themeSize: string;
  currentPageName: string;
}

const Navbar = ({ themeSize, currentPageName }: NavbarProps) => {
  const { pageSlideIsCompleted } = useContext(pageSliderContext);

  const navItems = [
    { name: 'home', text: 'Home', icon: 'home', to: '/' },
    { name: 'experience', text: 'Exp', icon: 'work', to: '/experience' },
    { name: 'tech', text: 'Tech', icon: 'build', to: '/tech' },
    { name: 'about', text: 'About', icon: 'person', to: '/about' },
    { name: 'contact', text: 'Contact', icon: 'email', to: '/contact' },
  ];

  return (
    <StyledNavbar pageHasTransitioned={pageSlideIsCompleted}>
      {navItems.map((item) => (
        <NavbarButton
          key={item.name}
          name={item.name}
          selected={currentPageName === item.name}
          themeSize={themeSize}
          currentPageName={currentPageName}
          text={item.text}
          iconName={item.icon}
          to={item.to}
        />
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
