import w1 from "../assets/w1.png";
import w2 from "../assets/w2.png";
import w3 from "../assets/w3.png";
import croissantImg from "../assets/croissant.png";
import cookieImg from "../assets/cookie.png";
import puffPastryImg from "../assets/puff.png";
import bagelImg from "../assets/bagel.png";
import baguetteImg from "../assets/baguette.png";

export const welcomeApi = [
  {
    id: 1,
    image: w1,
    description:
      "Experience pure bliss with every slice of our freshly baked cakes.",
  },
  {
    id: 2,
    image: w2,
    description:
      "Delight in the buttery layers and golden perfection of our freshly baked croissants.",
  },
  {
    id: 3,
    image: w3,
    description:
      "Savor the moist crumb and burst of flavor in every bite of our freshly baked muffins.",
  },
];

export const bakeryCategories = [
  {
    name: "all",
    products: [
      {
        id: 1,
        img: croissantImg,
        name: "Croissant",
        price: 4.0,
      },
      {
        id: 2,
        img: cookieImg,
        name: "Whole Grain Cookie",
        price: 6.0,
      },
      {
        id: 3,
        img: puffPastryImg,
        name: "Puff Pastry",
        price: 3.0,
      },
      {
        id: 4,
        img: bagelImg,
        name: "Bagel Multigrain",
        price: 8.0,
      },
      {
        id: 5,
        img: baguetteImg,
        name: "French Baguette",
        price: 7.0,
      },
    ],
  },
];
