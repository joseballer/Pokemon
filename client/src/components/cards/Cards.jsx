import Card from "../card/Card";

const Cards = ({ characters, handleNextPage }) => {
  return (
    
      <div>
        {characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            imageAux={character.imageAux}
            type={character.type}
          />
        ))}
      </div>
     
  );
};

export default Cards;
