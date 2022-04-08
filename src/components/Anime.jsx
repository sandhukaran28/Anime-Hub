import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Anime = () => {
  const location = useLocation();
  const { id } = location.state;
  const [anime, setAnime] = useState([]);
  const [locations, setlocations] = useState([]);

  useEffect(() => {
    async function getAnime() {
      try {
        const res = await axios.get(
          `https://ghibliapi.herokuapp.com/films/${id}`
        );
        setAnime(res.data);
      } catch (e) {
        console.log(e);
      }
      console.log(anime);
    }

    getAnime();
  }, []);
  return (
    <div className="outerDiv">
      <div className="left">
        <img className="animeImg" src={anime.image} alt="image" />
      </div>
      <div className="right">
        <h1 className="title">{anime.original_title_romanised}</h1>
        <h3 className="orignalTitle">{anime.original_title}</h3>
        <div className="tableDiv">
          <table>
            <tr>
              <th>Producer</th>
              <td>{anime.producer}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>{anime.director}</td>
            </tr>
            <tr>
              <th>Release Date </th>
              <td>{anime.release_date}</td>
            </tr>
            <tr>
              <th>RT Score:</th>
              <td>{anime.rt_score}</td>
            </tr>
            <tr>
              <th>Running Time:</th>
              <td>{anime.running_time} min</td>
            </tr>
          </table>
        </div>
        <div className="descConatainer">
          <p className="desc">{anime.description}</p>
        </div>
        <div className="locationContainer"></div>
      </div>
    </div>
  );
};

export default Anime;
