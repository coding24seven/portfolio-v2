import { useState } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import config from '@/helpers/config.ts';
import themes from './navbarButton-themes';

const buttonWidth = config.navbar.vertical.button.width;
const buttonHeight = config.navbar.horizontal.button.height;
const em = config.em.bind(config);

const StyledLinkWrapper = styled.div<{
  $hover: boolean;
  $rules: Record<string, string>;
}>`
  height: ${buttonHeight}rem;
  overflow: hidden;
  width: ${({ $hover }) => ($hover ? '110%' : `${buttonWidth}rem`)};
  border-top-right-radius: ${({ $rules }) => $rules.borderRadius};
  border-bottom-right-radius: ${({ $rules }) => $rules.borderRadius};
  color: ${themes.color};
  background-color: ${({ $rules }) => $rules.backgroundColor};
  background-image: ${({ $rules }) => $rules.backgroundImage};
  background-repeat: ${({ $rules }) => $rules.backgroundRepeat};
  font-family: ${({ $rules }) => $rules.fontFamily};
  text-transform: ${({ $rules }) => $rules.textTransform};
  font-size: ${({ $rules }) => $rules.fontSize};
  font-weight: ${({ $rules }) => $rules.fontWeight};
  letter-spacing: ${({ $rules }) => $rules.letterSpacing};
  user-select: none;
  transition:
    color 0s 0.42s ease-out,
    height 0.2s ease-out,
    width 0.2s ease-out;

  &:hover {
    transition:
      color 0s 0.33s ease-out,
      height 0.2s ease-out,
      width 0.2s ease-out;
    color: white;
  }

  @media (max-width: ${em(1100)}em) {
    flex: 1;
    border-radius: 0;
    border-bottom-left-radius: ${({ $rules }) => $rules.borderRadius};
    border-bottom-right-radius: ${({ $rules }) => $rules.borderRadius};
    ${({ $hover }) => $hover && `height: ${buttonHeight + 1.2}rem;`}
  }

  /* this is used in this component */
  &.button-selected {
    cursor: crosshair;
    color: white;
    background-color: ${({ $rules }) => $rules.backgroundColorOnSelected};
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
  border-radius: inherit;

  &.active {
    pointer-events: none;
  }
`;

interface NavbarButtonProps {
  name: string;
  text: string;
  iconName: string;
  currentPageName: string;
  themeSize: string;
  to: string;
  selected?: boolean;
}

const NavbarButton = ({
  name,
  text,
  iconName,
  currentPageName,
  themeSize,
  to,
  selected,
}: NavbarButtonProps) => {
  // In React 19, you can use the 'use' hook for context if preferred
  const [hover, setHover] = useState(false);
  const [touched, setTouched] = useState(false);

  const page = themes[currentPageName];
  const size = themes[themeSize];
  const pageDotSize = themes[currentPageName][themeSize];

  const rules = {
    fontFamily: page.fontFamily || themes.fontFamily,
    fontSize: page.fontSize || themes.fontSize,
    fontWeight: page.fontWeight || themes.fontWeight,
    textTransform: page.textTransform || themes.textTransform,
    letterSpacing: page.letterSpacing || themes.letterSpacing,
    backgroundImage: pageDotSize.backgroundImage,
    backgroundRepeat: pageDotSize.backgroundRepeat,
    backgroundColor: pageDotSize.backgroundColor,
    backgroundColorOnSelected: pageDotSize.activeLinkStyle.backgroundColor,
    borderRadius: size.borderRadius || themes.borderRadius,
  };

  const handleTouchEnd = () => {
    setTimeout(() => setTouched(false), 500);
  };

  return (
    <StyledLinkWrapper
      $rules={rules}
      $hover={hover}
      className={selected ? 'button-selected' : ''}
      onMouseEnter={() => !touched && !selected && setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => !selected && setTouched(true)}
      onTouchEnd={handleTouchEnd}
    >
      <StyledNavLink
        to={to}
        state={{ linkName: name, previousPageName: currentPageName }}
      >
        {themeSize === 'small' ? (
          <i className="material-icons">{iconName}</i>
        ) : (
          <span>{text}</span>
        )}
      </StyledNavLink>
    </StyledLinkWrapper>
  );
};

export default NavbarButton;
