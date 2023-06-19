import React from "react";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

const Starship = ({ name, model, films, highestFilmsCount }) => {
  return (
    <div className="starship-container">
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/databank_nabooroyalstarship_01_169_e61f677e.jpeg?region=0%2C0%2C1560%2C878"
        alt={name}
      />
      <h2>{name}</h2>
      <p>Model: {model}</p>
      <p>Films: {films.length}</p>
      {films.length === highestFilmsCount && <IconContext.Provider value={{ className: "star-icon" }}>
        <FaStar />
      </IconContext.Provider>}
    </div>
  );
};

export default Starship;
