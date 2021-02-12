import React from "react";
import AllSkills from "../../utils/skills";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import profile from "../../profile.jpg";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 220,
  },
}));



const Skills = () => {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);
  const [dense, setDense] = React.useState(false);
  const skiils1 = AllSkills[0]

  console.log(skiils1)

  return (
    <div className="jumbotron skills-wraper">
      <div className="skills-container container">
        <div className={classes.root}>
          <List dense={dense}>
            {/* mapp items here */}
            <h3 className="list-title">Skills</h3>
            <ListItem className="list-item">
              <ListItemAvatar>
                <Avatar alt="git hub" src={profile} />
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
            <ListItem className="list-item">
              <ListItemAvatar>
                <Avatar alt="git hub" src={profile} />
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          </List>
        </div>
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

{
  /* <List className={classes.demo}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="git hub" src={profile} />
                </ListItemAvatar>
                <ListItemText
                primary="REACT JS"
                secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
          </List>
      </div> */
}
