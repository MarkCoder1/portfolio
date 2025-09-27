import { Job, Project } from "../types";


export const projects: Project[] = [
  {
    title: "TrackPal",
    description:
      "TrackPal is a comprehensive productivity and finance tracking application designed to help users manage their daily tasks, weekly goals, and personal finances efficiently. Available as a web application and an Android mobile app, TrackPal empowers students, young professionals, and anyone interested in optimizing their daily routines and financial health. The app features intuitive tracking tools, visualizations, and AI-powered insights to streamline personal development and money management.",
    image: "/trackpal.png",
    liveDemoUrl: "http://trackpal.vercel.app",
    githubUrl: "https://github.com/lionzak/TrackPal",
    techImages: [
      "/next.png",
      "/typescript.svg",
      "/tailwind.svg",
      "/supabase.png",
      "/capacitorjs.jpg",
      "/chartjs.png",
      "/resend.png",
    ],
  },
  {
    title: "Egyptian Marvels",
    description:
      "An interactive web experience showcasing Egypt’s most iconic historical and cultural landmarks, built with React and Next.js for fast rendering. The site integrates responsive design and an optimized image gallery to provide an immersive and accessible user experience across devices.",
    image: "/egyptian marvels.png",
    liveDemoUrl: "https://egyptian-marvels.vercel.app",
    githubUrl: "https://github.com/lionzak/egyptian-marvels",
    techImages: [
      "/next.png",
      "/typescript.svg",
      "/tailwind.svg",
    ],
  },
  {
    title: "Portfolio Manager & Analytics Dashboard",
    description:
      "A comprehensive platform for managing and analyzing portfolio performance, built with React and Next.js. The dashboard features interactive charts and real-time data updates to provide users with valuable insights into their website.",
    image: "/dashboard.png",
    liveDemoUrl: "/",
    githubUrl: "https://github.com/lionzak/portfolio-dashboard",
    techImages: [
      "/next.png",
      "/typescript.svg",
      "/supabase.png",
      "/tailwind.svg",
      "/google_analytics.png",
    ],
  },
  {
    title: "HC Furniture Mall",
    description:
      "A dynamic e-commerce platform designed to provide users with an engaging shopping experience. The website features a modern and responsive interface, allowing customers to seamlessly browse shops and categories, explore hot deals, and discover new arrivals. A custom-built dashboard enables mall administrators to efficiently manage shops, categories, and promotions. The site was developed with Contentful as a headless CMS for flexible content management and deployed on Hostinger for reliable hosting and performance.",
    image: "/hcmall.webp",
    liveDemoUrl: "https://www.hcfurnituremall.com/",
    githubUrl: "/",
    techImages: [
      "/next.png",
      "/typescript.svg",
      "/contenful.png",
      "/tailwind.svg",
      "/hostinger.svg",
    ],
  },
  {
    title: "CareMate App",
    description:
      "CareMate is a Flutter mobile app designed for elderly users and people with disabilities. It offers text-to-speech, speech-to-text, color recognition, medicine reminders, and a food evaluation tool that scores meals based on user health data. Built with Flutter, it focuses on accessibility and healthcare support.",
    image: "/caremate.webp",
    liveDemoUrl: "/",
    githubUrl: "https://github.com/lionzak/Disability_Helper",
    techImages: [
      "/flutter.svg",
      "/dart.svg",
      "/ml kit.svg",
      "/gemini.svg",
    ],
  },
];


export const jobs: Job[] = [
  {
    period: "2025 - Present",
    title: "Software Developer",
    company: "SoftSpark Solutions.",
    location: "Remote",
    description:
      "Developed and maintained scalable web applications using TypeScript, Next.js, and Node.js, integrating Supabase for authentication and database management. Contributed to both frontend and backend features, optimized UI/UX for performance and accessibility, and implemented efficient data handling to support client-facing projects.",
    skills: ["React", "Node.js", "Supabase", "Typescript"],
  },
  {
    period: "2025 - Present",
    title: "Teaching Assistant",
    company: "Exploratory Center for Science and Technology",
    location: "Cairo, Egypt",
    description:
      "Assisted in teaching robotics and STEM concepts to young learners using Arduino and LEGO robotics kits. Guided students through hands-on projects, helping them understand programming, electronics, and problem-solving skills in a practical and engaging way. Supported classroom activities, prepared instructional materials, and encouraged creativity and teamwork in technology-based learning.",
    skills: ["C/C++", "Arduino"],
  },
  {
    period: "2023 - 2024",
    title: "Robotics & Embedded Systems Trainee",
    company: "Robotec Club",
    location: "Ain Shams University, Cairo",
    description:
      "Participated in a short-term training program focused on embedded systems and robotics. Assisted in building and programming robotic systems, gained hands-on experience with microcontrollers and sensors, and collaborated with peers on practical problem-solving activities.",
    skills: ["C/C++", "Arduino", "Embedded Systems", "ESP32",],
  },
];

export const skillCategories = [
  {
    skills: [
      { name: "HTML", svgPath: "/html.svg" },
      { name: "CSS", svgPath: "/css.svg" },
      { name: "JavaScript", svgPath: "/javascript.svg" },
      { name: "React", svgPath: "/react.svg" },
      { name: "Next.js", svgPath: "/next.png" },
      { name: "Typescript", svgPath: "/typescript.svg" },

      { name: "Tailwind", svgPath: "/tailwind.svg" },
      { name: "Git", svgPath: "/git.svg" },
      { name: "Github", svgPath: "/github.svg" },
      { name: "Flutter", svgPath: "/flutter.svg" },

      { name: "MongoDB", svgPath: "/mongo.svg" },
      { name: "Firebase", svgPath: "/firebase.svg" },
      { name: "Supabase", svgPath: "/supabase.png" },
      { name: "Contentful", svgPath: "/contenful.png" },
      { name: "Python", svgPath: "/python.svg" },
    ],
  },
];