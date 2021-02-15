import JavaScript from "../skillLogos/js.png"
import DataBase from "../skillLogos/database.png"
import APILogo from "../skillLogos/api.png"
import HTMLCSSLogo from "../skillLogos/html-css.png"
import Coding from "../skillLogos/coding.png"
import otherSkills from "../skillLogos/tool.png"

const MySkills = [
  {
    skills1: [
      {
        Lenguage: "JavaScript",
        img: JavaScript,
        alt: "javascript",
        text: "React Js, jQuery, ES6"
      },
      {
        Lenguage: "CSS/HTML",
        img: HTMLCSSLogo,
        alt: "html css",
        text: "HTML5, CSS3, Bootstrap"
      },
      {
        Lenguage: "DataBases",
        img: DataBase,
        alt: "database",
        text: "MongoDB, mySql"
      }
    ],
  },
  {
    skills2: [
      {
        Lenguage: "API",
        img: APILogo,
        alt: "API",
        text: "Axios, Ajax, Web Api's"
      },
      {
        Lenguage: "Other Libraries",
        img: Coding,
        alt: "Other Libraries",
        text: "Node Js, Express, Git and more"
      },
      {
        Lenguage: "Other Skills",
        img: otherSkills,
        alt: "Other Skills",
        text: "Auto Mechanic, Computer Repair, Costumer Service, Musician"
      }
    ],
  }
];

export default MySkills;

// skills1: ["HTML", "CSS", "ES6", "JavaScript", "React Js", "jQuery"],
// skills2: ["mySql", "Sequelize", "Mongo DB", "Axios", "Ajax", "Node Js"],
// otherSkills: [
//   "Auto Mechanics",
//   "Computer Repair",
//   "Sales Associate",
//   "Leadership",
//   "Musician",
//   "Creative",
// ],
