import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import craftshareImg from "@/public/craftshare.png";
import pingImg from '@/public/ping.png'
import cofeeImg from '@/public/coffee.png'


export const links = [
  {
    name: "Обо мне",
    hash: "#home",
  },
  // {
  //   name: "Обо мне",
  //   hash: "#about",
  // },
  {
    name: "Проекты",
    hash: "#projects",
  },
  {
    name: "Навыки",
    hash: "#skills",
  },
  {
    name: "Опыт",
    hash: "#experience",
  },
  {
    name: "Контакты",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: `Курс "JavaScript/DOM/Интерфейсы"`,
    location: "learn.javascript.ru",
    description:
      `курсы по профессиональному JavaScript и смежным технологиям. С теорией, ответами на вопросы, практикой, обратной связью по коду ("code review")`,
    icon: React.createElement(LuGraduationCap),
    date: "март 2023 - май 2023",
  },
  {
    title: "qa automation engineer",
    location: "Red Rover School",
    description:
      "Изучала теорию тестирования программного обеспечения, а также автоматизацию с использованием JavaScript и Cypress. Курировала группу студентов в рамках курса по изучению основ JavaScript",
    icon: React.createElement(LuGraduationCap),
    date: "август 2023 - декабрь 2023",
  },
  {
    title: "Front-End Developer",
    location: "Exlab Startup",
    description:
      "Разработка фронтенд части платформы для ремесленников от идеи до MVP. Верстка, логика, API, архитектура. Ведение отчетности в YouTrack. Работа в команде следуя методологии Scrum",
    icon: React.createElement(CgWorkAlt),
    date: "октябрь 2023 - настоящее время",
  },
  {
    title: "Front-End Developer",
    location: "Freelance",
    description:
      "Участие в проекте, связанном с управлением вакансиями, в качестве члена команды разработки. На начальном этапе проекта моя основная задача заключается в верстке. Параллельно я занимаюсь созданием других проектов с целью личного обучения и профессионального развития.",
    icon: React.createElement(FaReact),
    date: "декабрь 2023 - настоящее время",
  },
] as const;

export const projectsData = [
  {
    title: "CraftShare",
    description:
      "Сайт для ремесленников. Реализован функионал взаимодействия со статьями, личным кабинетом пользователя и другими авторами",
    tags: ["React", "JS", "Ant Design", "SASS", "Redux Toolkit", "ReactQuill", "JWT"],
    imageUrl: craftshareImg,
    link: "https://github.com/vsmrnw/CraftShare"
  },
  {
    title: "PingPong",
    description:
      "Реализация игры \"Пинг-понг\" с использованием языка JavaScript и элемента Canvas для создания графического интерфейса",
    tags: ["JavaScript", "HTML5", "Canvas"],
    imageUrl:  pingImg,
    link: "https://codepen.io/Yana-Saa/pen/abXObLq"
  },
  {
    title: "CoffeeHouse",
    description:
      "Сайт для кофейни, выполнен в рамках учебного проекта, без использования сторонних библиотек или фреймворков",
    tags: ["JavaScript", "HTML5", "CSS3", "Pixel Perfect"],
    imageUrl:  cofeeImg,
    link: "https://github.com/yanasaa/Coffee"
  },
] as const;

export const skillsData = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "TypeScript",
  "Next.js",
  "Git",
  "Tailwind",
  "Ant Design",
  "Redux Toolkit",
  "Formik",
  "SASS",
  "Framer Motion",
  "English",
  "Scrum",
] as const;