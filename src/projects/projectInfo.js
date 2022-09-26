// Project pictures
import artBuddy from '../_media/imgs/art-buddy.webp';
import reptifeed from '../_media/imgs/reptifeed.webp';
import bitClan from '../_media/imgs/8-bit-clan.webp';
import musophile from '../_media/imgs/musophile.webp';

// Awards
import mintbeanStar from '../_media/imgs/mintbean-star.gif';

const projects = [
  {
    name: 'Art Buddy',
    shortDescription: 'Arts-based games for special education',
    description: <><p>Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching students' academic goals. I worked with UX designer/fellow educator <a href='https://uxfol.io/mattiebecker'>Mattie Becker</a> to make this.</p><b>NOTE: I recommend viewing on a desktop. This app was purposely designed for a large screen.</b></>,
    learnedHowTo: [
      'make my code readable, obvious, and testable (I call it "making my code ROT")',
      'use package.json scripts to minimize typing in the terminal',
      'make music play in the browser depending on app settings',
      'create a component library of common UI elements',
      'articulate my vision for a product',
      'incorporate user feedback',
    ],
    techStack: ["Javascript", "React", "CSS", "Redux", "Jest"],
    img: artBuddy,
    links: {
      demo: 'https://art-buddy.surge.sh',
      github: 'https://github.com/Adam-Thometz/Art-Buddy'
    }
  },
  {
    name: 'Reptifeed',
    shortDescription: 'A reptilian diet tracker',
    description: <p>My second and final capstone project for Springboard. Inspired by my blue-tongue skink, Unity, this app gives you ideas on what to feed your reptile and helps you keep track of the foods you have for them.</p>,
    learnedHowTo: [
      'build admin-only features',
      'make a website/app accessible',
      'make a responsive website',
      'invent my own API'
    ],
    techStack: ["Javascript", "Node", "Express", "React", "CSS", "Postgres", "Jest"],
    login: {
      username: 'abc',
      password: '123'
    },
    img: reptifeed,
    links: {
      demo: 'https://reptifeed.surge.sh',
      github: 'https://github.com/Adam-Thometz/Reptifeed'
    }
  },
  {
    name: '8-Bit Clan',
    award: mintbeanStar,
    shortDescription: 'An 8-bit NFT maker',
    description: <p>A pixel art maker created for the Mintbean Hiring Hackathon, Nov 2021. Create art, save it to your profile, and see if it made it to the trending list! Built with UX designer <a href='https://melodyux.design/'>Melody Acosta</a> in a week. Winner of Mintbean Star, awarded to top 5% of competitors.</p>,
    learnedHowTo: [
      'collaborate with a UX designer',
      'work efficiently under tight time constraints',
      'store art data in a database and call on that data to reproduce a smaller version of that art'
    ],
    techStack: ["Javascript", "Node", "Express", "React", "JSS", "Postgres"],
    login: {
      username: 'abc',
      password: '123'
    },
    img: bitClan,
    links: {
      demo: 'https://8-bit-clan.surge.sh/',
      github: 'https://github.com/Adam-Thometz/8-Bit-Clan'
    }
  },
  {
    name: 'Musophile',
    shortDescription: 'An obscure music curator',
    description: <p>My first capstone project for Springboard. A website where you can curate your own music library. Created using the Spotify and MusicBrainz APIs.</p>,
    learnedHowTo: [
      'connect frontend and backend using server-side rendering',
      'use the Spotify API and OAuth'
    ],
    techStack: ["Python", "Flask", "Postgres", "HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
    login: {
      username: 'abc',
      password: '12345678'
    },
    img: musophile,
    links: {
      demo: 'https://musophile.herokuapp.com/',
      github: 'https://github.com/Adam-Thometz/Musophile'
    }
  },
];

export default projects