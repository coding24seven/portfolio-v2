/*
 ** config file
 */

const config = {
  // SITE-WIDE
  pageTransitionDurationMs: 1000, // includes delay
  pageTransitionDelayMs: 50, // for css transition

  pages: ['home', 'experience', 'tech', 'about', 'contact'],

  getPageIndex: function (page: string) {
    return this.pages.indexOf(page);
  },

  // get the url end, such as 'tech' or 'about' or 'home'
  extractPageNameFromUrl: function (url: string) {
    const regExp = /\//g;
    let pageName = url.replace(regExp, '');
    // default to 'home' if pageName "" or invalid/not found
    pageName = this.pages.includes(pageName) ? pageName : 'home';
    return pageName;
  },
  //. get browser viewport width in 'em' unit, font size in 'px' unit
  getBrowserState: function () {
    const fontSize =
      1.6 *
      parseFloat(
        getComputedStyle(document.querySelector('html') as HTMLElement)[
          'font-size'
        ],
      );

    const viewportWidth =
      (window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth) / fontSize;

    return {
      fontSize, // px
      viewportWidth, // em
    };
  },

  em: function (pixels: number) {
    return pixels / this.getBrowserState().fontSize;
  },
  navbar: {
    vertical: {
      button: {
        width: 13,
      },
    },
    horizontal: {
      button: {
        height: 8,
      },
    },
  },

  header: {
    poster: 'poster.jpg',
    videos: [
      // MP4/HEVC (H.265) is played by iOS and Mac
      {
        src: './vid/animation-h265.mp4',
        type: 'video/mp4',
        codecs: 'hevc',
      },
      // MP4 container with inefficient H.264 encoding
      {
        src: './vid/animation-h264.mp4',
        type: 'video/mp4',
      },
    ],
  },
  experience: {
    projects: {
      youTubeMagic: {
        heading: 'YouTube Magic',
        description:
          'A Firefox browser extension that filters out watched and members-only YouTube videos, keeping your YouTube feeds fresh and uncluttered.',
        technologies: 'TypeScript, ReactJS, NodeJS.',
        siteUrl:
          'https://addons.mozilla.org/en-US/firefox/addon/youtube-magic/',
        githubUrl: '',
        squareImagePath: 'youtube_magic_options_popup.png',
        rectangularImagePath: 'youtube_magic_options_popup.png',
      },
      bayer: {
        heading: 'Bayer Crop Science',
        description:
          'A tailored solution for farmers who want to plant, grow and protect their harvests using less land, water and energy.',
        technologies: 'TypeScript, ReactJS, VueJS, NodeJS.',
        siteUrl: 'https://login.cropscience.bayer.com',
        githubUrl: '',
        squareImagePath: 'bayer-square.jpg',
        rectangularImagePath: 'bayer-square.jpg',
      },
      nbbMobile: {
        heading: 'NBB Store',
        description: 'An e-commerce store by the company I worked for.',
        technologies: 'TypeScript, ReactJS, VueJS, NodeJS.',
        siteUrl: 'https://notebooksbilliger.de',
        githubUrl: '',
        squareImagePath: 'mobile-nbb-square.jpg',
        rectangularImagePath: 'mobile-nbb-square.jpg',
      },

      tradingBot: {
        heading: 'Crypto Trading Bot',
        description: 'A bot that trades cryptocurrency.',
        technologies: 'NodeJS, Typescript.',
        siteUrl: '',
        githubUrl: 'https://github.com/coding24seven/trading-bot',
        squareImagePath: 'trading-bot-square.jpg',
        rectangularImagePath: 'trading-bot-square.jpg',
      },

      freshLife: {
        heading: 'Fresh Life',
        description:
          'A site for an imaginary food-delivery service. Here I converted an example PSD image, throwing in my own literary and visual creativity into the pan.',
        technologies: 'HTML, SASS/CSS.',
        siteUrl: 'https://coding24seven.github.io/Fresh-life',
        githubUrl: 'https://github.com/coding24seven/Fresh-life',
        squareImagePath: 'cahee-square.jpg',
        rectangularImagePath: 'cahee-square.jpg',
      },

      roofland: {
        heading: 'Roofland',
        description:
          'A site for a fictional roofing company. I derived it from an example PSD image, which then I complemented with my own textual matter.',
        technologies: 'HTML, SCSS, JavaScript.',
        siteUrl: 'https://coding24seven.github.io/Roof-land',
        githubUrl: 'https://github.com/coding24seven/Roof-land',
        squareImagePath: 'roofland-square.jpg',
        rectangularImagePath: 'roofland-square.jpg',
      },

      meals: {
        heading: "Mum's Meals",
        description:
          'A journal of meals one has prepared or eaten. Ever since my mother started using it, the taste has improved by 49%.',
        technologies: 'Webpack, NodeJS, ExpressJS',
        siteUrl: 'https://kuchnia-demo.code24seven.pro',
        githubUrl: 'https://github.com/coding24seven/Meals',
        squareImagePath: 'meals-square.jpg',
        rectangularImagePath: 'meals-square.jpg',
      },
    },
  },
  about: {
    backgroundImage: 'yamaha.jpg',
    noiseImage: 'noise.png',
    backgroundAnimation: false,
  },
  contact: {
    // formActionUrl: "http://localhost:5173/portfolio-contact-form/"
    formActionUrl: 'https://router.code24seven.pro/portfolio-contact-form/',
  },
};

export default config;
