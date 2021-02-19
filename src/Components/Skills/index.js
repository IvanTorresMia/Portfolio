import React from "react";
import MySkills from "../../utils/skills";

const Skills = () => {
  console.log(MySkills[0].skills1);

  const skills1 = MySkills[0].skills1;
  const skills2 = MySkills[1].skills2;


  return (
    <div className="Jumbotron skills-wraper">
      <div className="container skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {skills1.map((skill, i) => (
            <div key={i} className="col mb-4" style={{width: "15rem"}}>
              <div className="h-100">
                <img src={skill.img} className="card-img-top rounded" alt={skill.alt} />
                <div className="card-body">
                  <h5 className="card-title">{skill.Lenguage}</h5>
                  <p className="card-text">
                   {skill.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-3">
          {skills2.map((skill, i) => (
            <div key={i} className="col mb-4" style={{width: "15rem"}}>
              <div className="h-100">
                <img src={skill.img} className="card-img-top rounded" alt={skill.alt} />
                <div className="card-body">
                  <h5 className="card-title">{skill.Lenguage}</h5>
                  <p className="card-text">
                   {skill.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
