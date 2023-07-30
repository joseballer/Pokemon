import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{character.id}</h2>
      <h1>{character.name}</h1>
      <img
        src={
          character.sprites?.other?.home?.front_default ||
          character.sprites?.other["official-artwork"]?.front_default
        }
        alt={character.name}
      />
      <p>Health: {character.stats?.[0]?.base_stat}</p>
      <p>Attack: {character.stats?.[1]?.base_stat}</p>
      <p>Defense: {character.stats?.[2]?.base_stat}</p>
      <p>Speed: {character.stats?.[5]?.base_stat}</p>
      <p>Height: {character.height}</p>
      <p>Weight: {character.weight}</p>
    </div>
  );
};
export default Detail;
