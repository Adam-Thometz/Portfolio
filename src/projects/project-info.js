import reptifeed from './screenshots/reptifeed.png';
import bitClan from './screenshots/8-bit-clan.png';
import catchYourFeelings from './screenshots/catch-your-feelings.png';
import musophile from './screenshots/musophile.png';

const projects = [
  {
    name: 'Reptifeed',
    description: 'My second and final capstone project for Springboard. Inspired by my new baby blue-tongue skink, Unity, this app gives you ideas on what to feed your reptile and reminds you when to feed it. Features a homemade API for food information. Currently made only for blue tongue skinks. If you know about other reptile diets, get in touch!',
    techStack: ["Javascript", "Node.js", "Express.js", "React.js", "CSS", "SQL", "PostgresQL", "Heroku"],
    img: reptifeed,
    links: {
      demo: 'reptifeed.surge.sh',
      github: 'https://github.com/Adam-Thometz/Reptifeed'
    }
  },
  {
    name: '8-Bit Clan',
    description: "A pixel art maker created for the Mintbean Hiring Hackathon, Nov 2021. Create art, save it to your profile, and see if it made it to the trending list! Built in a week with UX designer Melody Acosta. Winner of Mintbean Star, awarded to top 5% of competitors.",
    techStack: ["Javascript", "Node.js", "Express.js", "React.js", "JSS", "SQL", "PostgresQL", "Heroku"],
    img: bitClan,
    links: {
      demo: 'https://8-bit-clan.surge.sh/',
      github: 'https://github.com/Adam-Thometz/8-Bit-Clan'
    }
  },
  {
    name: 'Catch Your Feelings',
    description: "An app that I invented for my day job as a music teacher for autistic students in grades PreK-5. You describe how happy and energetic you feel using icons and you get a song back based on the input. Uses the Spotify API. This project is currently being revamped!",
    techStack: ["Python", "Flask", "HTML", "CSS", "Javascript", "Heroku"],
    img: catchYourFeelings,
    links: {
      demo: 'https://catch-your-feelings.herokuapp.com/',
      github: 'https://github.com/Adam-Thometz/Catch-Your-Feelings/tree/flask'
    }
  },
  {
    name: 'Musophile',
    description: 'My first full-stack application! My first capstone project for Springboard. A website where you can curate your own music library. Created using the Spotify and MusicBrainz APIs.',
    techStack: ["Python", "Flask", "PostgresQL", "HTML", "CSS", "Javascript", "jQuery", "Heroku"],
    img: musophile,
    links: {
      demo: 'https://musophile.herokuapp.com/',
      github: 'https://github.com/Adam-Thometz/Musophile'
    }
  },
];

export default projects;