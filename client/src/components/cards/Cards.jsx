import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cards}>
          {characters.map((character) => (
            <Card
              key={character.ID}
              id={character.ID}
              nombre={character.Nombre}
              imagen={character.Imagen}
              // tipo={character.Type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
