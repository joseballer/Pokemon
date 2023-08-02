import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cards}>
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              types={character.types}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
