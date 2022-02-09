//Import Images
import radio from "./img/radio.png";
import goodtimes from "./img/goodtimes-small.png";
import radio2 from "./img/radio2.png";
import goodtimes2 from "./img/good-times2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Radio",
      mainImg: radio,
      secondaryImg: radio2,
      url: "/work/the-athlete",
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
    },
    {
      title: "The Radio",
      mainImg: radio,
      url: "/work/the-racer",
      secondaryImg: radio2,
    },
  ];
};
