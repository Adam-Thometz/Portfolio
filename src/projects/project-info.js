// Project pictures
import artBuddy from './screenshots/art-buddy.png';
import reptifeed from './screenshots/reptifeed.png';
import bitClan from './screenshots/8-bit-clan.png';
import catchYourFeelings from './screenshots/catch-your-feelings.png';
import musophile from './screenshots/musophile.png';

// Awards
import mintbeanStar from './screenshots/mintbean-star.gif';

const projects = [
  {
    name: 'Art Buddy',
    description: "First 'real-world' project since graduating from bootcamp. Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching students' academic goals. These games are based on real lessons I taught during my time as a music teacher at an elementary school for autism. Art Buddy is a collaboration between myself and UX designer/fellow educator Mattie Becker. This app is currently in progress - look at the README in Github to see a list of currently functioning games.",
    whatILearned: ['make my code readable, obvious, and testable (I call it "making my code ROT")', 'make music play in the browser depending on app settings (i.e. guitar vs synth, C major vs F# major)', 'create a component library of common UI elements like buttons, icons, dropdowns, popups, etc.', 'use package.json scripts to minimize typing in the terminal', 'incorporate user feedback into my features', 'mock files and stylesheets in testing environments', 'create relative imports'],
    techStack: ["Javascript", "React", "CSS", "Redux", "Jest"],
    img: artBuddy,
    links: {
      demo: 'https://art-buddy.surge.sh',
      github: 'https://github.com/Adam-Thometz/Art-Buddy'
    }
  },
  {
    name: 'Reptifeed',
    description: 'My second and final capstone project for Springboard. Inspired by my blue-tongue skink, Unity, this app gives you ideas on what to feed your reptile and helps you keep track of the foods you have for them.',
    whatILearned: ['invent my own reptile diet API, since consistent data on reptile diets was hard to find', 'cycle through what they should eat based on a food\'s frequency and persist data (I used localStorage but looking back, I should have used a database)', 'build admin-only features', 'make a website/app accessible', 'make a responsive website'],
    techStack: ["Javascript", "Node", "Express", "React", "CSS", "SQL", "Postgres", "Jest"],
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
    description: "A pixel art maker created for the Mintbean Hiring Hackathon, Nov 2021. Create art, save it to your profile, and see if it made it to the trending list! Built with UX designer Melody Acosta in a week. Winner of Mintbean Star, awarded to top 5% of competitors.",
    whatILearned: ['collaborate with a UX designer', 'work efficiently under tight time constraints', 'store art data in a database and call on that data to reproduce a smaller version of that art'],
    techStack: ["Javascript", "Node", "Express", "React", "JSS", "SQL", "Postgres", "Heroku"],
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
  // "This was the first time I've collaborated with someone. Since we had a week to build this app, I learned how to work efficiently under time constraints. One feature I'm proud of is the save feature - I had to figure out how to store someone's work into a database and reproduce it in a smaller format when it comes time to show off the work in the trending section of the landing page. I accomplished this by storing the data as a long string and converting it back into an array when needed."
  {
    name: 'Catch Your Feelings',
    description: "An app that I invented for helping students identify their emotions. You describe how happy and energetic you feel using icons and you get an emotion and a song back based on the input. This project is now deprecated and the concept is currently being incorporated into Art Buddy as the Mood Meter! My first app that wasn't just CRUD",
    whatILearned: ['build an actually useful app', 'use vanilla JS and CSS to style'],
    techStack: ["Python", "Flask", "HTML", "CSS", "Javascript", "Heroku"],
    img: catchYourFeelings,
    links: {
      demo: 'https://catch-your-feelings.herokuapp.com/',
      github: 'https://github.com/Adam-Thometz/Catch-Your-Feelings/tree/flask'
    }
  },
  {
    name: 'Musophile',
    description: 'My first capstone project for Springboard. A website where you can curate your own music library. Created using the Spotify and MusicBrainz APIs.',
    whatILearned: ['connect frontend and backend using server-side rendering', 'use the Spotify API and OAuth'],
    techStack: ["Python", "Flask", "Postgres", "HTML", "CSS", "Javascript", "jQuery", "Heroku"],
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