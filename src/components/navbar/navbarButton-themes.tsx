/*
 ** Theme for navbar buttons
 ** All rules apply to the wrapper for a link, not to the link itself
 */

import colors from '@/helpers/colors.ts';

const {
  rgbaGrey,
  rgbViolet,
  rgbVioletBlack,
  rgbBlue,
  rgbGreyDark,
  rgbaMediumGrey,
  rgbOrange,
  rgbBlackIsh,
  rgbFriendlyGreen,
  rgbGrey,
  rgbGreyGreen,
  rgbaGreyGreen,
  rgbGold,
  hexVioletAlpha,
  hexGold,
} = colors;

const themes = {
  // SITE-WIDE
  color: 'rgba(255, 255, 255, 0.86)' /* rgbaWhite */,
  borderRadius: '1.3rem',
  fontFamily: 'Orbitron',
  fontSize: '1.6rem',
  fontWeight: 300,
  letterSpacing: '.1rem',
  textTransform: 'none',
  // BY SIZE
  large: {
    borderRadius: '1.5rem',
  },
  medium: {
    borderRadius: '1.3rem',
  },
  small: {
    borderRadius: '1.1rem',
  },
  // BY PAGE
  home: {
    fontFamily: 'Orbitron',
    large: {
      backgroundColor: rgbaGrey,
      activeLinkStyle: {
        backgroundColor: rgbaMediumGrey,
      },
    },
    medium: {
      backgroundColor: rgbViolet,
      activeLinkStyle: {
        backgroundColor: rgbVioletBlack,
      },
    },
    small: {
      backgroundColor: rgbViolet,
      activeLinkStyle: {
        backgroundColor: rgbVioletBlack,
      },
    },
  },
  about: {
    fontFamily: 'Racing Sans One',
    textTransform: 'uppercase',
    fontSize: '1.6rem',
    letterSpacing: '0.3rem',
    large: {
      backgroundColor: rgbaGreyGreen,
      activeLinkStyle: {
        backgroundColor: 'transparent',
      },
    },
    medium: {
      backgroundColor: rgbGold,
      activeLinkStyle: {
        backgroundColor: rgbGreyGreen,
      },
    },
    small: {
      backgroundColor: rgbGold,
      activeLinkStyle: {
        backgroundColor: rgbGreyGreen,
      },
    },
  },
  tech: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    letterSpacing: '.1rem',
    fontSize: '1.8rem',
    large: {
      backgroundColor: rgbBlue,

      activeLinkStyle: {
        backgroundColor: rgbGrey,
      },
    },
    medium: {
      backgroundColor: rgbBlue,
      activeLinkStyle: {
        backgroundColor: rgbGrey,
      },
    },
    small: {
      backgroundColor: rgbBlue,
      activeLinkStyle: {
        backgroundColor: rgbGrey,
      },
    },
  },
  chat: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    letterSpacing: '.1rem',
    fontSize: '1.8rem',
    large: {
      backgroundColor: hexVioletAlpha,

      activeLinkStyle: {
        backgroundColor: hexGold,
      },
    },
    medium: {
      backgroundColor: hexVioletAlpha,
      activeLinkStyle: {
        backgroundColor: hexGold,
      },
    },
    small: {
      backgroundColor: hexVioletAlpha,
      activeLinkStyle: {
        backgroundColor: hexGold,
      },
    },
  },
  experience: {
    fontFamily: 'Roboto',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    fontWeight: 500,
    letterSpacing: '.2rem',
    large: {
      backgroundColor: rgbOrange,
      activeLinkStyle: {
        backgroundColor: rgbBlackIsh,
      },
    },
    medium: {
      backgroundColor: rgbOrange,
      activeLinkStyle: {
        backgroundColor: rgbBlackIsh,
      },
    },
    small: {
      backgroundColor: rgbOrange,
      activeLinkStyle: {
        backgroundColor: rgbBlackIsh,
      },
    },
  },
  contact: {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 500,
    letterSpacing: '.1rem',
    large: {
      backgroundColor: rgbFriendlyGreen,
      activeLinkStyle: {
        backgroundColor: rgbGreyDark,
      },
    },
    medium: {
      backgroundColor: rgbFriendlyGreen,
      activeLinkStyle: {
        backgroundColor: rgbGreyDark,
      },
    },
    small: {
      backgroundColor: rgbFriendlyGreen,
      activeLinkStyle: {
        backgroundColor: rgbGreyDark,
      },
    },
  },
};

export type NavbarButtonThemes = typeof themes;
export default themes;
