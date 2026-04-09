import { useState } from 'react';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import themes, { type NavbarButtonThemes } from './navbarButton-themes';
import config from '@/helpers/config.ts';

const buttonWidth = config.navbar.vertical.button.width;
const buttonHeight = config.navbar.horizontal.button.height;

const em = config.em.bind(config);

const StyledLinkWrapper = styled.div<{
  $hover: boolean;
  $rules: Record<string, string>;
}>`
  height: ${buttonHeight}rem;

  overflow: hidden;

  width: ${({ $hover }) => ($hover ? '110%' : buttonWidth + 'rem')};

  border-top-right-radius: ${({ $rules }) => $rules.borderRadius};

  border-bottom-right-radius: ${({ $rules }) => $rules.borderRadius};

  color: ${themes.color};

  background-color: ${({ $rules }) => $rules.backgroundColor};

  background-image: ${({ $rules }) => $rules.backgroundImage};

  background-repeat: ${({ $rules }) => $rules.backgroundRepeat};

  font-family: ${({ $rules: { fontFamily } }) => fontFamily};

  text-transform: ${({ $rules }) => $rules.textTransform};

  font-size: ${({ $rules }) => $rules.fontSize};

  font-weight: ${({ $rules }) => $rules.fontWeight};

  letter-spacing: ${({ $rules }) => $rules.letterSpacing};

  user-select: none;

  --navlink-wrapper-transition:
    color 0s 0.42s ease-out, height 0.2s ease-out, width 0.2s ease-out;

  transition: var(--navlink-wrapper-transition);

  --navlink-wrapper-hover-transition:
    color 0s 0.33s ease-out, height 0.2s ease-out, width 0.2s ease-out;

  &:hover {
    transition: var(--navlink-wrapper-hover-transition);
    color: white;
  }

  @media (max-width: ${em(1100)}em) {
    flex: 1;
    border-radius: 0;
    border-bottom-left-radius: ${({ $rules }) => $rules.borderRadius};

    border-bottom-right-radius: ${({ $rules }) => $rules.borderRadius};

    &:first-child {
      border-bottom-left-radius: 0;
    }
    &:last-child {
      border-bottom-right-radius: 0;
    }

    ${({ $hover }) => $hover && `height: ${buttonHeight + 1.2}rem;`}
  }
  @media (max-width: ${em(500)}em) {
    height: ${({ $hover }) =>
      $hover ? buttonHeight - 0.2 + 'rem' : buttonHeight - 1 + 'rem'};
  }
  @media (max-width: ${em(400)}em) {
    height: ${({ $hover }) =>
      $hover ? buttonHeight - 1.4 + 'rem' : buttonHeight - 2 + 'rem'};
  }

  /* navlink wrapper (button) when selected */
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
    pointer-events: none; /* prevent the router */
  }
`;

const StyledIcon = styled.i`
  @media (max-width: ${em(500)}em) {
    font-size: 3rem;
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
  const [hover, setHover] = useState(false);
  const [touched, setTouched] = useState(false);

  const page = themes[currentPageName as keyof NavbarButtonThemes];
  const size = themes[themeSize as keyof NavbarButtonThemes];
  const pageDotSize =
    themes[currentPageName as keyof NavbarButtonThemes][themeSize];
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

  const handleMouseEnter = () => {
    if (touched) {
      return;
    }
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleTouchStart = () => {
    setTouched(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setTouched(false);
    }, 1000);
  };

  const linkProps = selected
    ? { className: 'button-selected' }
    : {
        $hover: hover,
        onMouseEnter: handleMouseEnter,
        onTouchStart: handleTouchStart,
      };

  return (
    <StyledLinkWrapper
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleTouchEnd}
      {...linkProps}
      $rules={rules}
    >
      <StyledNavLink
        to={to}
        state={{ linkName: name, previousPageName: currentPageName }}
      >
        {themeSize === 'small' ? (
          <StyledIcon className="material-icons">{iconName}</StyledIcon>
        ) : (
          <span>{text}</span>
        )}
      </StyledNavLink>
    </StyledLinkWrapper>
  );
};

export default NavbarButton;
