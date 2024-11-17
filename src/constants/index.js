import {
  // mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cinemix,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
} from "../assets";
import {tripplanner,sociout,ignyte,asperLogo,wmwLogo,buyKaro} from '../assets';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Asper",
    icon: asperLogo,
    iconBg: "#383E56",
    date: "May 2022 - Dec 2022",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
  {
    title: "Co-Head Web Development",
    company_name: "Asper",
    icon: asperLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Nov 2023",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
  {
    title: "SDE Intern",
    company_name: "WanderMeWell",
    icon: wmwLogo,
    iconBg: "#383E56",
    date: "Feb 2024 - Nov 2024",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "buyKaro",
    description:
      "A feature-rich e-commerce platform built with the MERN stack and Tailwind CSS. It offers secure authentication, Add to Cart, Wishlist, and Buy Now functionalities, along with a responsive design optimized for mobile and desktop devices..",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: buyKaro,
    source_code_link: "https://github.com/vinayakmalviya21/buykaro-frontend",
    website_link:"https://buykaro-frontend.vercel.app",
  },
  {
    name: "Cinemix",
    description:
      "A modern OTT platform built with ReactJS, Tailwind CSS, and Firebase. It features secure login functionality and integrates with a Movies API to provide a seamless experience for browsing and streaming movies across devices with a responsive design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: cinemix,
    source_code_link: "https://github.com/vinayakmalviya21/cinemix",
    website_link:"https://cinemix-ott.vercel.app/",
  },
  // {
  //   name: "Trip Planner",
  //   description:
  //     "Web-based platform that allows users to search and manage their trips.It helps in planning your trips.It suggest destination for your trip.It also provide other facility for your trip.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "firebase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripplanner,
  //   source_code_link: "https://github.com/vinayakmalviya21/TripPlanner",
  // },
  {
    name: "Sociout",
    description:
      "A feature-rich social media web application designed to enhance user connectivity and engagement. Users can create profiles, update their profile pictures, share posts, like posts, and manage friend requests, fostering seamless interaction and communication.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sociout,
    source_code_link: "https://github.com/vinayakmalviya21/Sociout",
    website_link:"https://vinayakmalviya21.github.io/Sociout/login.html",
  },
  // {
  //   name: "Ignyte",
  //   description:
  //     "Community website of ASPER.This community is tight-knit community of developers, coders, and designers who are here with a mission to spread the fire of knowledge and empower each other without any bounds!",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "gsap",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindCss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ignyte,
  //   source_code_link: "https://github.com/vinayakmalviya21/Ignyte-website",
  // },
];

export { services, technologies, experiences, testimonials, projects };
