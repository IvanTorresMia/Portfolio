import React from "react";
import AllSkills from "../../utils/skills";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Skills = () => {
  const skills1 = AllSkills[0].skills1;
  const skills2 = AllSkills[0].skills2;




  return (
    <div className="jumbotron skills-wraper">
      <div className="skills-container container">
       
      </div>
    </div>
  );
};

export default Skills;



// <div className="row">
// <div className="col">
//   {skills1.map((skill, i) => (
//     <p key={i} className="rounded skill-item1">
//       {skill}
//     </p>
//   ))}
// </div>
// <div className="col">
//   {skills2.map((skill, i) => (
//     <p key={i} className="rounded skill-item2">
//       {skill}
//     </p>
//   ))}
// </div>
// </div>
// <div className="col"></div>