export const SKILLS = {
  Frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Spring Boot (Java)", level: 75 },
  ],
  Database: [
    { name: "MongoDB", level: 85 },
    { name: "SQL", level: 70 },
  ],
  "Other Skills": [
    { name: "REST APIs", level: 90 },
    { name: "WebSockets", level: 80 },
    { name: "AI Integration", level: 78 },
    { name: "Clean Code Practices", level: 88 },
  ],
} as const;

export const EXPERIENCES = [
  {
    role: "Full Stack Developer Intern",
    org: "Thiranex",
    date: "May 2026 – Present",
    points: [
      "Developing and maintaining web applications across the stack",
      "Collaborating with teams to design scalable solutions",
      "Writing clean, efficient and maintainable code",
      "Working with real-world deployment workflows",
    ],
    type: "work",
  },
  {
    role: "Hackathon Winner — 1st Place",
    org: "Cresiton'26 · AI-Based Security System",
    date: "March 2026",
    points: [
      "Built an AI-powered security system end-to-end",
      "Developed a full-stack application with ML integration",
      "Implemented real-time monitoring and instant alerts",
      "Led teamwork and rapid iterative development",
    ],
    type: "achievement",
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Chat Room Application",
    description:
      "A scalable real-time messaging platform supporting multi-user rooms with WebSocket-powered instant communication and a clean responsive UI.",
    tags: ["React", "Node.js", "WebSockets", "MongoDB"],
    features: [
      "Multi-user real-time communication",
      "WebSocket-based messaging",
      "Responsive UI",
      "Scales for concurrent users",
    ],
    demo: "#",
    github: "https://github.com/SKTech-07/Chat-Room-Application",
  },
  {
    title: "Trainer Attendance Tracking System",
    description:
      "A web-based attendance management system with structured data storage, smart reporting, and an organized database that minimizes manual effort.",
    tags: ["MERN", "Express", "MongoDB"],
    features: [
      "Web-based attendance management",
      "Data storage and reporting features",
      "Organized database design",
      "Reduces manual effort, improves accuracy",
    ],
    demo: "#",
    github: "https://github.com/SKTech-07/Trainer-Attendance-Tracking-System",
  },
];

export const SERVICES = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end development of scalable, high-performance web applications using the MERN stack with clean architecture and modern best practices.",
    icon: "Code2",
  },
  {
    title: "Web Design",
    description:
      "Crafting modern, intuitive and user-friendly interfaces with a focus on responsiveness, accessibility, and delightful interaction design.",
    icon: "Palette",
  },
  {
    title: "API & Integration",
    description:
      "Designing robust REST APIs, real-time WebSocket flows, and AI integrations that connect your product to the services your users need.",
    icon: "Plug",
  },
];

export const CONTACT = {
  email: "sasthikkrishnamoorthy@gmail.com",
  phone: "+919360085631",
  linkedin: "https://linkedin.com/in/sasthik-k-49545632a/",
  github: "https://github.com/SKTech-07",
  instagram: "https://instagram.com/sasthikk/",
};
