module.exports = {  siteTitle: 'Patrick Nyangoto | Full Stack Software Engineer',
  siteDescription:
    'Patrick Nyangoto is a Full Stack Software Engineer passionate about building scalable web applications and AI solutions.',
  siteKeywords:
    'Patrick Nyangoto, Patrick, Nyangoto, nyangoto, full stack developer, software engineer, React, Node.js, Python, JavaScript, web developer, AI, machine learning, London, LSE',
  siteUrl: 'https://patorangin.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: '', // Add your GA ID when available
  googleVerification: '', // Add your verification code when available
  name: 'Patrick Nyangoto',
  location: 'London, UK',
  email: 'patricknyangoto@outlook.com',
  github: 'https://github.com/nyangoto',
  twitterHandle: '@nyangoto',  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nyangoto',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/patrick-orangi/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
