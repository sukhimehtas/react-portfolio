import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.jpg";

const projects = {
  1: {
    title: "Gym Management System",
    image: projectOne,
    description: (
      <>
        <p>
          Tools Used : Javascript , PHP , SQL , HTML & CSS
        </p>
      </>
    ),
    github: "https://github.com/sukhimehtas/Gym-Management-System.git",
  },
  2: {
    title: "ATILQ mart Sales Analysis",
    image: projectTwo,
    description: (
      <>
        <p>
          In progress
        </p>
      </>
    ),
    github: "https://github.com",
  },
   3:{
    title: "XYZ",
    image: projectThree,
    description: (
      <>
        <p>
SOON !
        </p>
      </>
    ),
    github: "https://github.com",
  },
};
export default projects;
