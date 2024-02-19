import { useHref } from "react-router-dom";
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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    
    jobit,
    tripguide,
    oasis,
    threejs,android,firebase,flixdin,flutter,java,ethnus,udemy, movies, minute, wchar, c3g, mausam, knowwhere
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
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Android Developer",
      icon: android,
    },
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: flutter,
    },
    {
      title: "JAVA Developer",
      icon: java,
    },
    
  ];
  
  const technologies = [
    {
      name: "Android Studios",
      icon: android,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
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
      name: "React JS",
      icon: reactjs,
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
    },
    
  ];
  
  const experiences = [
    {
      
      title: "The Complete Android Oreo Developer Course",
      company_name: "Android",
      icon: udemy,
      iconBg: "#383E56",
      date: "6th May 2023",
      points: [
        "This course enhanced my android developer skills.",
        "Throught the course, I created several applications that are user friendly.",
        "Several topics like database, authentication, API services, etc were also covered in this course",
        "CERTIFICATION URL : http://www.udemy.com/certificate/UC-598a6fe3-39e5-40a8-b053-0c3d8f75a891",
        
        
      ],
    },
    {
      title: "Android Developer Intern      ",
      company_name: "OASIS INFOBYTE",
      icon: oasis,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Oct 2023",
      points: ["During my internship period, I created several generic applications such as Stopwatch application, Quiz application , Calculator application",
      ["I worked specifically on enhancing the frontend of the apps.",
        "This intenship was a great experience to add up to my skill set."]
      
      ],
    },
    {
      title: "MERN Full Stack Internship",
      company_name: "ETHNUS",
      icon: ethnus,
      iconBg: "#E6DEDD",
      date: "2023",
      points: [
        "Got certified in my web development skills, made several projects.",
        "Technologies learnt : ReactJs, MongoDB, ExpressJs, NodeJs.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Android Developer Intern      ",
      company_name: "Flixdin",
      icon: flixdin,
      iconBg: "#383E56",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Worked on the company’s Android app on both frontend (XML) and backend integration using JAVA.",
        "Developed the login and signup process, Integrated APIs using Retrofit.",
        "Gained deeper understanding of RecyclerViews and Adapters.Worked with Firebase Database and Firebase Auth.",
      
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
      name: "Movies App",
      description:
        "Its a movie information app that uses API to get movie details, Retrofit was used to fetch the data and display using adapters and recycler views. Improved bottom navigation design and gradient colors for icons and background.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: movies,
      source_code_link: "https://github.com/Baibhav008/movies-app",
    },
    {
      name: "Minute Mentor",
      description:
        "An effective react application that will automate and streamline the tracking of employee work hours, attendance, and related data to enhance workforce management and ensure compliance.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: minute,
      source_code_link: "https://minute-mentor.vercel.app/",
    },
    {
      name: "WChat",
      description:
        "WChat is an android application made for chatting with other users. It is a basic Whatsapp clone.It uses Firebase database to store chat messages and Firebase Auth for login and user session management. One to one chat and chat rooms are two types of chatting interfaces.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
      ],
      image: wchar,
      source_code_link: "https://github.com/Baibhav008/WChat",
    },
    
    {
      name: "C3G Game",
      description:
        "Simple Tic Tac Toe game with unique UI theme.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
        
      ],
      image: c3g,
      source_code_link: "https://github.com/Baibhav008/C3G_Game",
    },
    {
      name: "Mausam ",
      description:
        "Android studios application for real time weather information. Used Weather API to fetch details. Background theme changes as per the weather conditions.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "blue-text-gradient",
        },
      ],
      image: mausam,
      source_code_link: "https://github.com/Baibhav008/Mausam_app",
    },
    {
      name: "Know Where",
      description:
        " Android Studios application for real time geolocation using device sensors. Available in two themes, which user can change anytime. Gives real time location info, also has a compass. This app is suitable for trekking enthusiast.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
        {
          name: "Geolocation",
          color: "blue-text-gradient",
        },
      ],
      image: knowwhere,
      source_code_link: "https://github.com/Baibhav008/KnowWhere_app",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };