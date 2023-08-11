import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
const Detail = () => {
  const [character, setCharacter] = useState({});
  const URL = "http://localhost:3001/pokemons";
  const { id } = useParams();

  useEffect(() => {
    axios(`${URL}/${id}`).then(({ data }) => {
      if (data.ID) {
        setCharacter(data);
      }
    });
  }, [id]);
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h2>{character.ID}</h2>
        <h1>{character.Nombre}</h1>
        <img
          className={style.img}
          src={character.Imagen}
          alt={character.Nombre}
        />
      </div>
      <div className={style.stats}>
        <h1>Stats</h1>
        <h2>Vida: {character.Vida}</h2>
        <h2>Ataque: {character.Ataque}</h2>
        <h2>Defensa: {character.Defensa}</h2>
        <h2>Velocidad: {character.Velocidad}</h2>
        <h2>Altura: {character.Altura}</h2>
        <h2>Peso: {character.Peso}</h2>
        <h2>Tipo: </h2>
        <ul>
          {/* {character.Type.map((type) => (
            <li>{type.Nombre}</li>
          ))} */}
          {character.Type && Array.isArray(character.Type) ? character.Type.map((type) => (
            <li>{type.Nombre}</li>
          )) : null}
        </ul>
      </div>
    </div>
  );
};
export default Detail;
