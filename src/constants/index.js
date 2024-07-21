import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chicmic,
  carrent,
  jobit,
  tripguide,
  threejs,
  cocos_creator,
} from "../assets";

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
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Cocos Creator",
    icon:cocos_creator,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Associate Software Developer",
    company_name: "Chicmic",
    icon: chicmic, // Add your icon variable here
    iconBg: "#383E56",
    date: "August 2023 – Present",
    points: [
      "Developed various games in different genres such as multiplayer Action, social virtual world, and Puzzle using Cocos Creator, TypeScript, Photon, Tiledmap, etc.",
      "Created multiple projects using Three.js and implemented performance optimizations such as LoD, frustum culling, instancing, and more.",
      "Enhanced game performance by optimizing physics calculations and minimizing the number of calls for player synchronization in multiplayer scenarios.",
      "Conducted extensive research and development across diverse subjects, showcasing adaptability and a rapid learning curve.",
    ],
  },
  {
    title: "Associate Software Developer Intern",
    company_name: "Chicmic",
    icon: chicmic, // Add your icon variable here
    iconBg: "#E6DEDD",
    date: "Jan 2023 – Jul 2023",
    points: [
      "Assisted in the development of Game applications for iOS/Android using Cocos and TypeScript.",
      "Worked with multiplayer engine Photon to manage user syncing across multiple devices.",
      "Engaged in various stages of the Software Development Life Cycle (SDLC), including documentation and testing.",
      "Actively contributed to and delivered presentations on technologies utilized in Cocos.",
    ],
  },
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
    name: "Chat Application",
    description:
      "a real-time chat application leveraging Socket.IO for seamless bi-directional communication between clients and the server.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://fuzzy-hmzg.onrender.com/",
  },
  {
    name: "Bubble shooter",
    description:
      "an engaging bubble shooter game,with multiple levels and stunning animations, graphics and with smooth gameplay mechanics",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "cocos creator",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://play.google.com/store/apps/details?id=com.bubbleshooter.popbubbles",
  },
];

export { services, technologies, experiences, testimonials, projects };
