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
  {
    name: "cakes",
    products: [
      {
        id: 1,
        img: "/images/cake-1.jpg",
        name: "Chocolate Fudge Cake",
        price: 28.0,
      },
      {
        id: 2,
        img: "/images/cake-2.jpg",
        name: "Vanilla Bean Cake",
        price: 24.0,
      },
      {
        id: 3,
        img: "/images/cake-3.jpg",
        name: "Red Velvet Cake",
        price: 26.0,
      },
      {
        id: 4,
        img: "/images/cake-4.jpg",
        name: "Carrot Cake",
        price: 22.0,
      },
    ],
  },
  {
    name: "Cookies",
    products: [
      {
        id: 1,
        img: "/images/cookie-1.jpg",
        name: "Chocolate Chip Cookies",
        price: 5.0,
      },
      {
        id: 2,
        img: "/images/cookie-2.jpg",
        name: "Oatmeal Raisin Cookies",
        price: 4.5,
      },
      {
        id: 3,
        img: "/images/cookie-3.jpg",
        name: "Sugar Cookies",
        price: 4.0,
      },
      {
        id: 4,
        img: "/images/cookie-4.jpg",
        name: "Peanut Butter Cookies",
        price: 4.5,
      },
    ],
  },
  {
    name: "Bread",
    products: [
      {
        id: 1,
        img: "/images/bread-1.jpg",
        name: "Sourdough Bread",
        price: 8.0,
      },
      {
        id: 2,
        img: "/images/bread-2.jpg",
        name: "Baguette",
        price: 6.0,
      },
      {
        id: 3,
        img: "/images/bread-3.jpg",
        name: "Whole Wheat Bread",
        price: 7.5,
      },
      {
        id: 4,
        img: "/images/bread-4.jpg",
        name: "Rye Bread",
        price: 8.5,
      },
    ],
  },
  {
    name: "Doughnuts",
    products: [
      {
        id: 1,
        img: "/images/doughnut-1.jpg",
        name: "Glazed Doughnut",
        price: 3.5,
      },
      {
        id: 2,
        img: "/images/doughnut-2.jpg",
        name: "Chocolate Doughnut",
        price: 4.0,
      },
      {
        id: 3,
        img: "/images/doughnut-3.jpg",
        name: "Jelly Filled Doughnut",
        price: 4.5,
      },
      {
        id: 4,
        img: "/images/doughnut-4.jpg",
        name: "Boston Cream Doughnut",
        price: 4.0,
      },
    ],
  },
  {
    name: "Croissants",
    products: [
      {
        id: 1,
        img: "/images/croissant-1.jpg",
        name: "Butter Croissant",
        price: 3.0,
      },
      {
        id: 2,
        img: "/images/croissant-2.jpg",
        name: "Chocolate Croissant",
        price: 4.0,
      },
      {
        id: 3,
        img: "/images/croissant-3.jpg",
        name: "Almond Croissant",
        price: 4.5,
      },
      {
        id: 4,
        img: "/images/croissant-4.jpg",
        name: "Ham & Cheese Croissant",
        price: 5.0,
      },
    ],
  },
  {
    name: "Muffins",
    products: [
      {
        id: 1,
        img: "/images/muffin-1.jpg",
        name: "Blueberry Muffin",
        price: 3.5,
      },
      {
        id: 2,
        img: "/images/muffin-2.jpg",
        name: "Banana Nut Muffin",
        price: 3.0,
      },
      {
        id: 3,
        img: "/images/muffin-3.jpg",
        name: "Chocolate Chip Muffin",
        price: 3.5,
      },
      {
        id: 4,
        img: "/images/muffin-4.jpg",
        name: "Lemon Poppyseed Muffin",
        price: 3.5,
      },
    ],
  },
  {
    name: "Cupcakes",
    products: [
      {
        id: 1,
        img: "/images/cupcake-1.jpg",
        name: "Vanilla Cupcake",
        price: 4.0,
      },
      {
        id: 2,
        img: "/images/cupcake-2.jpg",
        name: "Chocolate Cupcake",
        price: 4.0,
      },
      {
        id: 3,
        img: "/images/cupcake-3.jpg",
        name: "Red Velvet Cupcake",
        price: 4.5,
      },
      {
        id: 4,
        img: "/images/cupcake-4.jpg",
        name: "Strawberry Cupcake",
        price: 4.0,
      },
    ],
  },
];
