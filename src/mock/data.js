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
    img: 'https://i.ibb.co/hZHrCpX/Stop-The-Cap.jpg',
    title: 'Stop The Cap Vinyls',
    info: 'A music app that lets users save/collect Albums/Vinyl data(Ruby on Rails + React app)',
    info2: '',
    url: 'https://app.netlify.com/sites/jovial-shaw-11ec5e',
    repo: 'https://github.com/midris360/stopthecap-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://serving.photos.photobox.com/26134675acb956e93796b180e74c93d20f647462a0eeb9e857202b70b6102b3c5df80358.jpg',
    title: 'NPM Start Career',
    info: 'An app to help keep organized in our dev job search.',
    info2: 'This project was a collaborative MERN stack project with three other software engineers.',
    url: 'https://npmstartcareer.netlify.app/',
    repo: 'https://github.com/KyleLynnRas/proj3-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://serving.photos.photobox.com/769273065c07932404286d6f8f0ea5d12c9ce2491fde5b833842f771af6ce517c9a2cce7.jpg',
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
