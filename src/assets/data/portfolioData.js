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
];

export default portfolios;
