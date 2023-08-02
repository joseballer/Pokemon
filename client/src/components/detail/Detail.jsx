import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const URL = "http://localhost:3001/pokemons";
  const { id } = useParams();

  useEffect(() => {
    axios(`${URL}/${id}`).then((response) => {
      if (response.data.name) {
        setCharacter(response.data);
      } else {
        window.alert("No characters with that ID");
      }
    });
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h2>{character.id}</h2>
        <h1>{character.name}</h1>
        <img
          className={style.img}
          src={
            character.sprites?.other?.home?.front_default ||
            character.sprites?.other["official-artwork"]?.front_default
          }
          alt={character.name}
        />
      </div>
      <div className={style.stats}>
        <h1>Stats</h1>
        <h2>Health: {character.stats?.[0]?.base_stat}</h2>
        <h2>Attack: {character.stats?.[1]?.base_stat}</h2>
        <h2>Defense: {character.stats?.[2]?.base_stat}</h2>
        <h2>Speed: {character.stats?.[5]?.base_stat}</h2>
        <h2>Height: {character.height}</h2>
        <h2>Weight: {character.weight}</h2>
        <h2> Type: </h2>
        <ul>
          {character.types?.map((type) => (
            <li key={type.slot}><h2>{type.type.name}</h2></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Detail;
