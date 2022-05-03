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
    description: 'First "real-world" project since graduating from bootcamp. Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching student academic goals. Games are based on real lessons I taught during my time as a special education music teacher. Art Buddy was made in collaboration with a UX designer and fellow educator. This game is currently in progress. For now, the only working games are Word-To-Music Decoder, Sequence Maker, and Score Keeper. There are remnants of Whats That Instrument currently deployed.',
    techStack: ["Javascript", "React", "CSS", "Redux", "Jest"],
    img: artBuddy,
    links: {
      demo: 'https://art-buddy.surge.sh',
      github: 'https://github.com/Adam-Thometz/Art-Buddy'
    }
  },
  {
    name: 'Reptifeed',
    description: 'My second and final capstone project for Springboard. Inspired by my new baby blue-tongue skink, Unity, this app gives you ideas on what to feed your reptile and helps you keep track of the foods you have for them. Features a homemade API for food information.',
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
    description: "An app that I invented for my day job as a music teacher for autistic students in grades PreK-5. You describe how happy and energetic you feel using icons and you get a song back based on the input. This project is currently being revamped!",
    techStack: ["Python", "Flask", "HTML", "CSS", "Javascript", "Heroku"],
    img: catchYourFeelings,
    links: {
      demo: 'https://catch-your-feelings.herokuapp.com/',
      github: 'https://github.com/Adam-Thometz/Catch-Your-Feelings/tree/flask'
    }
  },
  // {
  //   name: "Colorful Melodies",
  //   description: "An app that takes words and turns them into a simple melody by having students identify letters. Used as a tool in my music classroom to teach musical pitch by associating pitches with colors and letters. Created with the goal of incorporating letter recognition into mutlisensory musical instruction for students with learning and sensory-based disabilities. Uses the Web Audio API.",
  //   techStack: ["HTML", "CSS", "Javascript"],
  //   img: musicColors,
  //   links: {
  //     demo: '',
  //     github: ''
  //   }
  // },
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