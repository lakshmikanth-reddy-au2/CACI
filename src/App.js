import React, { useEffect, useState } from "react";
import { fetchStarships } from "./api";
import Starship from "./components/Starship";
import "./App.scss";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [highestFilmsCount, setHighestFilmsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const starshipsData = await fetchStarships();
      const filteredShips = starshipsData.filter((ship) => ship.crew <= 10).sort((a, b) => b.crew - a.crew);
      let highestNumberOfFilms = 0;
      filteredShips.forEach(element => {
        highestNumberOfFilms = element.films.length > highestNumberOfFilms ? element.films.length : highestNumberOfFilms;
      });
      setStarships(filteredShips);
      setHighestFilmsCount(highestNumberOfFilms);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
        alt="Logo"
      />
      <h1>Starship Statistics</h1>
      {starships.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="starships-list">
          {starships.map((starship) => (
            <Starship
              key={starship.name}
              name={starship.name}
              model={starship.model}
              films={starship.films}
              highestFilmsCount={highestFilmsCount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
