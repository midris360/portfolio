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
    img: 'https://camo.githubusercontent.com/6cc7fb6da78d9b8305f9d07c7dcccc9064a5d09df354c46ade24e243b2f91c4e/68747470733a2f2f692e6962622e636f2f466e645a6d6a422f53637265656e73686f742d312e706e67',
    title: 'AudioLike',
    info: 'A music app that allows users to create account and then be able to create a list of artists/songs and add to a favorites playlist that the users like.',
    info2: '',
    url: 'https://midris-project2.herokuapp.com/',
    repo: 'https://github.com/midris360/project2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://i.ibb.co/hZHrCpX/Stop-The-Cap.jpg',
    title: 'Stop The Cap Vinyls',
    info: 'A music app that lets users save/collect Albums/Vinyl data(Ruby on Rails + React app)',
    info2: '',
    url: 'https://app.netlify.com/sites/jovial-shaw-11ec5e',
    repo: 'https://github.com/midris360/stopthecap-frontend', // if no repo, the button will not show up
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
