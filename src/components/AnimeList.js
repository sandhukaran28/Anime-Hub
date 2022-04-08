import React from "react";
import AnimeCard from "./AnimeCard";
function AnimeList({ animes }) {
  return (
    <ul>
      {animes.map((anime) => {
        return (
          <AnimeCard
            id={anime.id}
            name={anime.original_title_romanised}
            desc={anime.description}
            image={anime.image}
          />
        );
      })}
    </ul>
  );
}

export default AnimeList;
