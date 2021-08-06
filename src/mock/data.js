import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1tMe3FgtkAJ66qlfBq_HcKKrqPODtBMKh', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'StopTheCap.png',
    title: 'Stop The Cap Vinyls',
    info: 'A music app that lets users save/collect Albums/Vinyl data(Ruby on Rails + React app)',
    info2: '',
    url: 'https://app.netlify.com/sites/jovial-shaw-11ec5e',
    repo: 'https://github.com/midris360/stopthecap-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'npm.png',
    title: 'NPM Start Career',
    info: 'An app to help keep organized in our dev job search.',
    info2: 'This project was a collaborative MERN stack project with three other software engineers.',
    url: 'https://npmstartcareer.netlify.app/',
    repo: 'https://github.com/KyleLynnRas/proj3-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Audiodb.png',
    title: 'AudioDB',
    info: 'An audio web app that retrieves data about different musicians from different genres using the Audiodb API.',
    info2: '',
    url: 'https://midris360.github.io/',
    repo: 'https://github.com/midris360/midris360.github.io', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'midris360@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/craftgfx',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/midris360',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mohammedkidris/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/midris360',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
