export interface Project {
  id: number;
  title: string;
  type: "Software Development" | "UX/UI Design" | "AI & Machine Learning";
  description: string;
  tech: Array<{ name: string; icon?: string }>;
  github: string;
  ref?: string | false;
  image: string;
  year: number;
  images: string[];
  haveImage: boolean;
  layout: "web" | "mobile";
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "BookingRoom Web Application",
    type: "Software Development",
    description:
      "Developed a booking room web application using Next.js Typescripts and MongoDB for the database.",
    tech: [
      { name: "Next.js", icon: "image/skills/framework/nextjs.png" },
      { name: "Typescripts", icon: "image/skills/programming/typescript.png" },
      { name: "Tailwind", icon: "image/skills/framework/tailwind.png" },
      { name: "MongoDB", icon: "image/skills/framework/mongodb.png" },
    ],
    github: "https://github.com/aumputthipong/BookingNextApp.git",

    ref: "git",
    image: "/projects/bookingroom/booking (1).png",
    year: 2024,
    images: [
      "/projects/bookingroom/booking (1).png",
      "/projects/bookingroom/booking (2).png",
      "/projects/bookingroom/booking (3).png",
      "/projects/bookingroom/booking (4).png",
      "/projects/bookingroom/booking (5).png",
      "/projects/bookingroom/booking (6).png",
      "/projects/bookingroom/booking (7).png",
      "/projects/bookingroom/booking (8).png",
      "/projects/bookingroom/booking (9).png",
      "/projects/bookingroom/booking (10).png",
      "/projects/bookingroom/booking (11).png",
      "/projects/bookingroom/booking (12).png",
    ],
    haveImage: true,
    layout: "web",
  },
  {
    id: 2,
    title: "Job Search Application",
    type: "Software Development",
    description:
      "Developed a mobile application for job seekers and employers using React Native, integrated with Firebase for real-time data and user management.",
    tech: [
      { name: "ReactNative", icon: "image/skills/framework/react-native.png" },
      { name: "Firebase", icon: "image/skills/framework/firebase.png" },
      { name: "JavaScript", icon: "image/skills/programming/js.png" },
      { name: "Mobile App" },
    ],
    github: "https://github.com/aumputthipong/job-app-project.git",
    ref: false,
    image: "/projects/jobapp/jobapp(10).png",
    year: 2023,
    images: [
      "/projects/jobapp/jobapp(3).png",
      "/projects/jobapp/jobapp(10).png",
      "/projects/jobapp/jobapp(7).png",
      "/projects/jobapp/jobapp(16).png",
      "/projects/jobapp/jobapp(17).png",
      "/projects/jobapp/jobapp(13).png",
      "/projects/jobapp/jobapp(20).png",
      "/projects/jobapp/jobapp(24).png",
      "/projects/jobapp/jobapp.png",
      "/projects/jobapp/jobapp(14).png",
      "/projects/jobapp/jobapp(8).png",
      "/projects/jobapp/jobapp(9).png",
      "/projects/jobapp/jobapp(12).png",
      "/projects/jobapp/jobapp(2).png",
      "/projects/jobapp/jobapp(1).png",
    ],
    haveImage: true,
    layout: "mobile",
  },
  {
    id: 3,
    title: "Canteen Food Web Application",
    type: "Software Development",
    year: 2023,
    description:
      "Developed food ordering system for canteen web application, using Vue.js for the frontend, Express.js for the backend, and MySQL for the database.",
    tech: [
      { name: "Vue", icon: "image/skills/framework/vue.png" },
      { name: "Express", icon: "image/skills/framework/express-js.png" },
      { name: "MySQL", icon: "image/skills/framework/mysql.png" },
      { name: "JavaScript", icon: "image/skills/programming/js.png" },
    ],
    github: "https://github.com/aumputthipong/FoodIOrderingProject.git",
    ref: "https://ai-garden-ref.com",
    image: "/projects/foodordering/foodorder (5).png",
    images: [
      "/projects/foodordering/foodorder (5).png",
      "/projects/foodordering/foodorder (2).png",
      "/projects/foodordering/foodorder(11).png",
      "/projects/foodordering/foodorder (3).png",
      "/projects/foodordering/foodorder (7).png",
      "/projects/foodordering/foodorder (6).png",
      "/projects/foodordering/foodorder (4).png",
      "/projects/foodordering/foodorder (1).png",
      "/projects/foodordering/foodorder (9).png",
      "/projects/foodordering/foodorder (8).png",
    ],
    haveImage: true,
    layout: "web",
  },
  {
    id: 4,
    title: "Convenience Store Management",
    type: "Software Development",
    description:
      "Developed an employee management module for a convenience store web application using Java Spring Boot, designed with a microservices architecture.",
    tech: [
      { name: "Java", icon: "image/skills/programming/java.png" },
      { name: "SpringBoot", icon: "image/skills/framework/spring.png" },
      { name: "MongoDB", icon: "image/skills/framework/mongodb.png" },
      { name: "React", icon: "image/skills/framework/react.png" },
    ],
    github: "https://github.com/aumputthipong/EmployeeManageProject.git",
    ref: false,
    image: "projects/con_manage.png",
    year: 2023,
    images: ["/images/detail1.png", "/images/detail2.png"],
    haveImage: false,
    layout: "web",
  },
  {
    id: 5,
    title: "Parking App Figma Design",
    year: 2024,

    type: "UX/UI Design",
    description:
      "Designed a university parking mobile application using Figma, enabling users to search for available parking spots and navigate to parking areas.",
    tech: [
      { name: "Figma", icon: "image/skills/tools/figma.png" },
      { name: "UX/UI Design" },
    ],
    github: "",
    ref: "https://www.figma.com/design/BYo9FiNxbL4vDWB7MyEpuf/prototype?node-id=0-1",
    image: "/projects/ParkingApp/parking (3).png",
    images: [
      "/projects/ParkingApp/parking (1).png",
      "/projects/ParkingApp/parking (2).png",
      "/projects/ParkingApp/parking (3).png",
      "/projects/ParkingApp/parking (4).png",
      "/projects/ParkingApp/parking (5).png",
      "/projects/ParkingApp/parking (6).png",
      "/projects/ParkingApp/parking (8).png",
      "/projects/ParkingApp/parking (9).png",
    ],
    haveImage: true,
    layout: "mobile",
  },
  {
    id: 6,
    title: "BlueRoom Registration System",
    type: "UX/UI Design",
    description:
      "Analyzed requirements and designed a scheduling system for faculty to manage class timetables and teaching assignments.",
    tech: [
      { name: "Figma", icon: "image/skills/tools/figma.png" },
      { name: "UX/UI Design" },
    ],
    github: "",
    year: 2024,
    ref: false,
    image: "/projects/reg-web/reg (11).png",
    images: [
      "/projects/reg-web/reg (1).png",
      "/projects/reg-web/reg (2).png",
      "/projects/reg-web/reg (3).png",
      "/projects/reg-web/reg (4).png",
      "/projects/reg-web/reg (5).png",
      "/projects/reg-web/reg (6).png",
      "/projects/reg-web/reg (7).png",
      "/projects/reg-web/reg (8).png",
      "/projects/reg-web/reg (9).png",
      "/projects/reg-web/reg (10).png",
      "/projects/reg-web/reg (11).png",
      "/projects/reg-web/reg (12).png",
      "/projects/reg-web/reg (13).png",
    ],
    layout: "web",
    haveImage: true,
  },

  {
    id: 7,
    title: "Depth Estimate Model",
    type: "AI & Machine Learning",
    description:
      "Estimated depth maps from RGB images using a convolutional autoencoder. Built for a Deep Learning course project.",
    tech: [
      { name: "Python", icon: "image/skills/programming/python.png" },
      { name: "Deep Learning" },
      { name: "Machine Learning" },
      { name: "Train Model" },
    ],
    github: "https://github.com/aumputthipong/depth_estimate.git",
    year: 2024,
    ref: false,
    image: "/projects/depth-esti/depth-est (1).png",
    images: [
      "/projects/depth-esti/depth-est (0).png",
      "/projects/depth-esti/depth-est (1).png",
      "/projects/depth-esti/depth-est (2).png",
      "/projects/depth-esti/depth-est (6).png",
    ],
    layout: "web",
    haveImage: true,
  },
];
