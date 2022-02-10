import soulSound from "./img/soul-sound.png";
import soulSound2 from "./img/soul-sound2.png";
import javascript from "./img/javascript.svg";
import es6 from "./img/es6.svg";
import sass from "./img/sass.svg";
import react from "./img/react.svg";
// import goodtimes from "./img/goodtimes-small.png";
// import goodtimes2 from "./img/good-times2.jpg";

export const ProjectState = () => {
  return [
    {
      title: "Soul Sound",
      mainImg: soulSound,
      url: "/work/the-racer",
      secondaryImg: soulSound2,
      technologies: [
        { name: "React", icon: react },
        { name: "Javascript", icon: javascript },
        { name: "ES6", icon: es6 },
        { name: "SASS", icon: sass },
      ],
      description:
        "\"Soul Sound\" is a simple but beautiful Music Player App. \n I used create React App for this project along with SASS and all newest React features like hooks.\nThe interface is full of smooth and cool animations. \nThe user can select songs from the library made as a cool side panel. It is also possible to play, pause, change the songs ckicking backward and forward buttons and also change the volume.\nWhile playing, the circle in the middle is spinning producing a cool effect.\nFeel free to try it buy clicking the \"visit site\" button. You can also view the code by clicking on \"view code\" button.\nThe design is fully responsible and it looks great on all kind of screens.",
    },
    // {
    //   title: "Soul Sound",
    //   mainImg: soulSound,
    //   secondaryImg: soulSound2,
    //   url: "/work/the-athlete",
    // },
    // {
    //   title: "Good Times",
    //   mainImg: goodtimes,
    //   url: "/work/good-times",
    //   secondaryImg: goodtimes2,
    // },
  ];
};
