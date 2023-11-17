import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, country] = useState([]);
  const [rangeValue, setRangeValue] = useState(250);
  const continents = [
    ["Africa", "Afrique"],
    ["America", "Amerique"],
    ["Asia", "Asie"],
    ["Europe", "Europe"],
    ["Oceania", "Oceanie"],
  ];
  const [selectedRadio, setSelectedRadio] = useState("");
  //const [salut] = useState("salut les amis");
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => country(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        {/* changer type hidden par "range" pour le visualiser */}
        <input
          type="hidden"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {continents.map((element, index) => (
          <li>
            <input
              type="radio"
              id={element[0]}
              name="contentRadio"
              checked = {element[0] === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={element[0]}>{element[1]}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && <button onClick={()=>setSelectedRadio("")}>Annuler la recherche</button>}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} pays={country} compte={Countries.length} />
          ))}
      </ul>
      
    </div>
  );
};

export default Countries;
