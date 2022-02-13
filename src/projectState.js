import soulSound from "./img/soul-sound.png";
import soulSound2 from "./img/soul-sound2.png";
import gamefinder from "./img/gamefinder.png";
import gamefinder2 from "./img/gamefinder2.png";
import devBlogs from "./img/devblogs.png";
import devBlogs2 from "./img/devblogs2.png";
import javascript from "./img/javascript.svg";
import nextjs from "./img/nextjs.svg";
import redux from "./img/redux.svg";
import es6 from "./img/es6.svg";
import styledComponents from "./img/styled-components.png";
import sass from "./img/sass.svg";
import react from "./img/react.svg";
import tailwindCSS from "./img/tailwindcss-icon.svg";
import myPortfolio from "./img/my-portfolio2.png";
import myPortfolio2 from "./img/my-portfolio2.png";
import framerMotion from "./img/framer-motion.svg";
import vercel from "./img/vercel.svg";
import git from "./img/git-icon.svg";

export const ProjectState = () => {
  return [
    {
      title: "Soul Sound",
      mainImg: soulSound,
      url: "/projects/soul-sound",
      secondaryImg: soulSound2,
      technologies: [
        { name: "React", icon: react },
        { name: "Javascript", icon: javascript },
        { name: "ES6", icon: es6 },
        { name: "SASS", icon: sass },
        { name: "Git", icon: git },
      ],
      description:
        '"Soul Sound" is a simple but beautiful Music Player App. \n I used create React App for this project along with SASS and all newest React features.\nThe interface is full of smooth and cool animations. \nThe user can select songs from the library. It is also possible to play, pause, change the songs ckicking backward and forward buttons and also change the volume.\nWhile playing, the circle in the middle is spinning producing a cool effect.\nFeel free to try it buy clicking on the "Visit Site" button.\nYou can also view the code by clicking on "View Code" button.\nThe design is fully responsible and it looks great on all kind of screens.',
      site: "https://lilly-it.github.io/soul-sound",
      code: "https://github.com/lilly-it/soul-sound",
    },
    {
      title: "Gamefinder",
      mainImg: gamefinder,
      secondaryImg: gamefinder2,
      url: "/projects/gamefinder",
      technologies: [
        { name: "React", icon: react },
        { name: "Javascript", icon: javascript },
        { name: "ES6", icon: es6 },
        { name: "Redux", icon: redux },
        { name: "Styled Components", icon: styledComponents },
        { name: "Git", icon: git },
      ],
      description:
        '"Soul Sound" is a simple but beautiful Music Player App. \n I used create React App for this project along with SASS and all newest React features.\nThe interface is full of smooth and cool animations. \nThe user can select songs ward buttons and also chang from the library. It is also possible to play, pause, change the songs ckicking backward and forward buttons and  songs ckicking backward and forward buttons and also change  ward buttons and also changthe volume.\nWhile playing, the circle in the middle is spinning producing a cool effect.\nFeel free to try it buy clicking on the "Visit Site"',
      site: "https://lilly-it.github.io/gamefinder",
      code: "https://github.com/lilly-it/gamefinder",
    },
    {
      title: "DevBlogs",
      mainImg: devBlogs,
      url: "/projects/devblogs",
      secondaryImg: devBlogs2,
      technologies: [
        { name: "NextJS", icon: nextjs },
        { name: "React", icon: react },
        { name: "Javascript", icon: javascript },
        { name: "ES6", icon: es6 },
        { name: "TailwindCSS", icon: tailwindCSS },
        { name: "Vercel", icon: vercel },
        { name: "Git", icon: git },
      ],
      description:
        '"Soul Sound" is a simple but beautiful Music Player App. \n I used create React App for this project along with SASS and all newest React features.\nThe interface is full of smooth and cool animations. \nThe user can select songs ward buttons and also chang from the library. It is also possible to play, pause, change the songs ckicking backward and forward buttons and  songs ckicking backward and forward buttons and also change  ward buttons and also changthe volume.\nWhile playing, the circle in the middle is spinning producing a cool effect.\nFeel free to try it buy clicking on the "Visit Site"',
      site: "https://devblogs-chi.vercel.app/",
      code: "https://github.com/lilly-it/devblogs",
    },
    {
      title: "My Portfolio",
      mainImg: myPortfolio,
      url: "/projects/my-portfolio",
      secondaryImg: myPortfolio2,
      technologies: [
        { name: "React", icon: react },
        { name: "Javascript", icon: javascript },
        { name: "ES6", icon: es6 },
        { name: "Framer Motion", icon: framerMotion },
        { name: "Styled Components", icon: styledComponents },
        { name: "Git", icon: git },
      ],
      description:
        '"Soul Sound" is a simple but beautiful Music Player App. \n I used create React App for this project along with SASS and all newest React features.\nThe interface is full of smooth and cool animations. \nThe user can select songs ward buttons and also chang from the library. It is also possible to play, pause, change the songs ckicking backward and forward buttons and  songs ckicking backward and forward buttons and also change  ward buttons and also changthe volume.\nWhile playing, the circle in the middle is spinning producing a cool effect.\nFeel free to try it buy clicking on the "Visit Site"',
      site: "https://lilly-it.github.io/my-portfolio",
      code: "https://github.com/lilly-it/my-portfolio",
    },
  ];
};
