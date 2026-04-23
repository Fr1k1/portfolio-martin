import PCHut from "./assets/pc_hut_image.png";
import Movement from "./assets/movement.jpg";
import Stonks from "./assets/stonks.png";
import Buketomat from "./assets/buketomat.png";
import MoviesApp from "./assets/MovieApp.png";
import TravelOrderApp from "./assets/travelorderapp.png";
import Stylo from "./assets/stylo_img.png";
import Nwtis from "./assets/nwtis.png";
import TravelBloggers from "./assets/travel_bloggers.png";
import NepaliSignsApp from "./assets/nepali_signs_app.png";

export const projects = [
  {
    id: 1,
    projectName: "PCHut",
    image: PCHut,
    projectDescription: "PC shop e-commerce app built with Laravel and Vue.js",
    link: "https://github.com/Fosleen/PCHUT",
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    id: 2,
    projectName: "Stylo",
    image: Stylo,
    projectDescription: "MACH architecture app using Commercetools & Contentful — built in collaboration with IBM IX",
    link: "https://github.com/Fr1k1/Stylo",
    tags: ["React", "Commercetools", "Contentful"],
  },
  {
    id: 3,
    projectName: "Stonks",
    image: Stonks,
    projectDescription: "C# finance app with modern features including facial recognition",
    link: "https://github.com/Fr1k1/STONKS",
    tags: ["C#", ".NET", "Entity Framework"],
  },
  {
    id: 4,
    projectName: "Movement",
    image: Movement,
    projectDescription: "Ri-Hack 2023 winning app built with React and Express",
    link: "https://github.com/Fr1k1/Ri-Hack-2023",
    tags: ["React", "Express", "🏆 Ri-Hack Winner"],
  },
  {
    id: 6,
    projectName: "Angular Movies",
    image: MoviesApp,
    projectDescription: "Movie discovery app using Angular and REST API",
    link: "https://github.com/Fr1k1/Angular_movies_application",
    tags: ["Angular", "Express", "REST API"],
  },
  {
    id: 7,
    projectName: "Travel Order App",
    image: TravelOrderApp,
    projectDescription: "Travel order management system built during internship at SICK Hrvatska",
    link: "https://github.com/Fr1k1/TravelOrderApp",
    tags: ["jQuery", "ASP.NET", "JavaScript"],
  },
  {
    id: 5,
    projectName: "Buketomat",
    image: Buketomat,
    projectDescription: "Flower shop app built as a college project with Kotlin and PHP",
    link: "https://github.com/Fr1k1/Buketomat_new",
    tags: ["Kotlin", "PHP"],
  },
  {
    id: 8,
    projectName: "Telemetry Radars",
    image: Nwtis,
    projectDescription: "Multithreaded Java app with Docker and Apache — tracking telemetry vehicles and radars",
    link: "https://github.com/Fr1k1/nwtis-telemetry-vehicles-radars",
    tags: ["Java", "Docker", "Apache"],
  },
  {
    id: 9,
    projectName: "TravEM CMS Blog",
    image: TravelBloggers,
    projectDescription: "Live travel blog platform with a custom CMS built on React, Express, and Digital Ocean",
    link: "https://putujemstravem.com/",
    tags: ["React", "Express", "Custom CMS", "Live"],
  },
  {
    id: 10,
    projectName: "Nepali Signs App",
    image: NepaliSignsApp,
    projectDescription: "Android app for learning Nepali sign language, built in React Native",
    link: "",
    tags: ["React Native", "Android"],
  },
];
