import { React, useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";
import axios from "axios";
import AnimeList from "./AnimeList";

const Home = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    async function getAnime() {
      try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");
        setAnime(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    }

    getAnime();
  }, []);

  return (
    <div className="mainContainer">
      <AnimeList animes={anime} />
    </div>
  );
};

export default Home;
