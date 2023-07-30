import Card from "../card/Card";

const Cards = ({ characters }) => {
  return (
    <>
      <div>
        {characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            type={character.type}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
