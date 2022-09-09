// Project pictures
import artBuddy from '../_media/imgs/art-buddy.png';
import reptifeed from '../_media/imgs/reptifeed.png';
import bitClan from '../_media/imgs/8-bit-clan.png';
import catchYourFeelings from '../_media/imgs/catch-your-feelings.png';
import musophile from '../_media/imgs/musophile.png';

// Awards
import mintbeanStar from '../_media/imgs/mintbean-star.gif';

const projects = [
  {
    name: 'Art Buddy',
    description: <><p><b>NOTE: This app was purposely designed for a large screen so it will look terrible on mobile!</b></p><p>First 'real-world' project since graduating from bootcamp. Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching students' academic goals. These games are based on real lessons I taught during my time as a music teacher at an elementary school for autism. Art Buddy is a collaboration between myself and UX designer/fellow educator <a href='https://uxfol.io/mattiebecker'>Mattie Becker</a>. This app is currently in progress - look at the README in Github to see a list of currently functioning games.</p></>,
    learnedHowTo: [
      'make my code readable, obvious, and testable (I call it "making my code ROT")',
      'make music play in the browser depending on app settings (i.e. guitar vs synth, C major vs F# major. I could play Baby Shark in C on guitar or A on synth)',
      'create a component library of common UI elements like buttons, icons, dropdowns, popups, etc.',
      'use package.json scripts to minimize typing in the terminal',
      'incorporate user feedback into my features',
      'articulate my vision for a product',
      'mock files and stylesheets in testing environments',
      'create relative imports'
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
    description: <p>My second and final capstone project for Springboard. Inspired by my blue-tongue skink, Unity, this app gives you ideas on what to feed your reptile and helps you keep track of the foods you have for them.</p>,
    learnedHowTo: [
      'invent my own reptile diet API, since consistent data on reptile diets was hard to find',
      'cycle through what they should eat based on a food\'s frequency and persist data (I used localStorage but looking back, I should have used a database)',
      'build admin-only features',
      'make a website/app accessible',
      'make a responsive website'
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
    name: 'Catch Your Feelings',
    description: <><p>An app that I invented for helping students identify their emotions. You describe how happy and energetic you feel using icons and you get an emotion and a song back based on the input.</p><p><b>This project is now deprecated and the concept is currently being incorporated into Art Buddy as the Mood Meter!</b></p></>,
    learnedHowTo: [
      'apply my programming skills to solving a real problem',
      'work with only vanilla JS - no frontend framework'
    ],
    techStack: ["Python", "Flask", "HTML", "CSS", "Javascript"],
    img: catchYourFeelings,
    links: {
      github: 'https://github.com/Adam-Thometz/Catch-Your-Feelings'
    }
  },
  {
    name: 'Musophile',
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