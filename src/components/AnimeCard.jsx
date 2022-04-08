import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const AnimeCard = ({ id, desc, image, name }) => {
  console.log("id:" + id);
  return (
    <Link to="/anime" state={{ id: id }}>
      <Card className="card" sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="cardImg"
            image={image}
            alt="anime image"
          />
          <CardContent>
            <span className="animeName">{name}</span>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AnimeCard;
