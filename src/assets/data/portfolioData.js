import portfolioImg01 from "../images/Screenshot (25).png";
import portfolioImg02 from "../images/Screenshot (26).png";
import portfolioImg03 from "../images/Screenshot (27).png";
import portfolioImg04 from "../images/Screenshot (28).png";
import portfolioImg05 from "../images/Screenshot (29).png";
import portfolioImg06 from "../images/Screenshot (30).png";
import Apple1 from "../images/apple1.png"
import Apple2 from "../images/apple2.png"
import Apple3 from "../images/apple3.png"
import Apple4 from "../images/apple4.png"
import Ecco1 from "../images/ecco1.png"
import Ecco2 from "../images/ecco2.png"
import Ecco3 from "../images/ecco3.png"
import Ecco4 from "../images/ecco4.png"
import Ecco from "../images/ecco.png"
import Food from '../images/FoodService.png'
import MusicApi from "../images/musicAPi.png"
const portfolios = [
  {
    id: "01",
    // imgUrl: portfolioImg01,
    imgUrl: [portfolioImg01,portfolioImg02, portfolioImg03, portfolioImg04, portfolioImg05, portfolioImg06],
    category: "Web Design",
    title: "CosmosIQ a Edtech Website",
    description:
      "CosmosIQ is an EdTech platform designed to revolutionize learning by offering modern, user-friendly tools and resources for students, educators, and institutions.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.cosmosiq.ai/",
  },
  {
    id: "02",
    imgUrl: [Apple1,Apple2,Apple3,Apple4],
    category: "Ui/Ux",
    title: "Apple Website Clone",
    description:
      "The Apple website clone focuses on replicating Apple’s clean, minimalistic, and premium UI/UX design to practice and showcase advanced UI/UX skills",
    technologies: ["React", "Tailwind css", "Three JS" , "Gsap", ],
    siteUrl: "https://github.com/Ranveer1singh/apple_webiste",
  },
  {
    id: "03",
    imgUrl: [Ecco1, Ecco2, Ecco3, Ecco4],
    category: "Ui UX",
    title: "eCommerce  ",
    description:
      "React-Redux eCommerce project is a dynamic web application designed to provide a seamless shopping experience while demonstrating efficient state management",
    technologies: ["React", "Tailwind css", "Redux" , "react-router-dom"],
    siteUrl: "https://github.com/Ranveer1singh/Multimart",
  },
  {
    id: "04",
    imgUrl: [Ecco],
    category: "Backend",
    title: "eCommerce Backend ",
    description:
      "Built a backend system using Node.js, Multer, and JWT with role-based authentication. Users can create accounts, log in, and add items to their cart, while only admins can add and manage products. Secure authentication is implemented using JWT, and Multer is used for handling product image uploads",
    technologies: ["Node Js", "Express Js", "JWT" , "Multer Js", "MongoDb"],
    siteUrl: "https://github.com/Ranveer1singh/Ecco_practice",
  },
  {
    id: "05",
    imgUrl: [Food],
    category: "Backend",
    title: "Food Service Backend (TypeScript, Node.js)  ",
    description:
      "Developed a TypeScript-based Node.js backend for a food ordering platform with role-based authentication. Features include - Vendor Management: Vendors can add restaurants and food items Customer Features: Users can browse, add to cart, and order food Secure Authentication: JWT-based auth and OTP login via Twilio.",
    technologies: ["TypeScript", "Nodejs ", "Express js" , "Twilio" , "Multer Js", "MongoDb"],
    siteUrl: "https://github.com/Ranveer1singh/food_service",
  },
  {
    id: "06",
    imgUrl: [MusicApi],
    category: "Backend",
    title: "eCommerce  ",
    description:
      "Built a Node.js  backend for a music streaming platform. Users can create playlists and add songs, with Multer handling file uploads. Songs are stored in GFS (GridFS) bucket in chunks using Streams & Pipelines for efficient processing and retrieval. Designed for scalability and seamless playback",
    technologies: ["Node js ", "Express JS", "MongoDb", "Passport Js", "gfs Buckects"],
    siteUrl: "https://github.com/Ranveer1singh/Music_Stream_Api",
  },
];

export default portfolios;
  // "homepage": "https://Ranveer1singh.github.io/my-Portfolio",
// 