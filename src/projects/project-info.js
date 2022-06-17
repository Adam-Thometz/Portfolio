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
    description: "First 'real-world' project since graduating from bootcamp. Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching students' academic goals. These games are based on real lessons I taught during my time as a music teacher at an elementary school for autism. Art Buddy is a collaboration between myself and a UX designer and fellow educator. This app is currently in progress. For now, the only working games are Word-To-Music Decoder, Sequence Maker, What's That Instrument, and Score Keeper.",
    techStack: ["Javascript", "React", "CSS", "Redux", "Jest"],
    img: artBuddy,
    links: {
      demo: 'https://art-buddy.surge.sh',
      github: 'https://github.com/Adam-Thometz/Art-Buddy'
    }
  },
  {
    name: 'Reptifeed',
    description: 'My second and final capstone project for Springboard. Inspired by my blue-tongue skink, Unity, this app gives you ideas on what to feed your reptile and helps you keep track of the foods you have for them. Features a homemade API for food information.',
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
    description: "A pixel art maker created for the Mintbean Hiring Hackathon, Nov 2021. Create art, save it to your profile, and see if it made it to the trending list! Built in a week with UX designer Melody Acosta. Winner of Mintbean Star, awarded to top 5% of competitors.",
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
  {
    name: 'Catch Your Feelings',
    description: "An app that I invented for helping students identify their emotions. You describe how happy and energetic you feel using icons and you get an emotion and a song back based on the input. This project is now discontinued and is being incorporated into Art Buddy as the Mood Meter!",
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

export default projects;