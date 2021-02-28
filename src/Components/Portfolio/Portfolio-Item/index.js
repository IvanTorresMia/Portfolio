import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import githubLogo from "../../../Contact-Folder/github.jpg";
import deployedLogo from "../../../Contact-Folder/deployed1.jpg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 395,
    margin: "2rem",
    textAlign: "center",
    backgroundColor: "rgb(76, 76, 76)",
    color: "#fff",
  },
  media: {
    height: 140,
  },
});

const PortfolioItem = ({ Projects }) => {
  const classes = useStyles();


  const handleClick = (e) => {
    e.preventDefault();
    window.open(`${Projects.Deployed}`, '_blank')
  }

  return (
    <div className="col-sm-4 card-container">
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            image={Projects.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {Projects.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="card-p"
            >
              {Projects.discription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={Projects.github} target="_blank" rel="noreferrer">
            <img
              className="img-thumbnail m-2"
              src={githubLogo}
              alt="GitHub Icon"
            />
          </a>
          <a href={Projects.Deployed} target="_blank" rel="noreferrer">
            <img
              className="img-thumbnail m-2"
              src={deployedLogo}
              alt="GitHub Icon"
            />
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default PortfolioItem;
