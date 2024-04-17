import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import craftshareImg from "@/public/craftshare.png";
import pingImg from '@/public/ping.png'
import cofeeImg from '@/public/coffee.png'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "qa automation engineer",
    location: "Red Rover School",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Exlab Startup",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Front-End Developer",
    location: "Freelance",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CraftShare",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    tags: ["React", "Ant Design", "SASS", "Redux Toolkit"],
    imageUrl: craftshareImg,
  },
  {
    title: "PingPong",
    description:
      "Contrary to popular belief, terature from 45 BC, making it over 2000 years old.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl:  pingImg,
  },
  {
    title: "CoffeeHouse",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl:  cofeeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Ant Design",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Django",
  "Framer Motion",
] as const;