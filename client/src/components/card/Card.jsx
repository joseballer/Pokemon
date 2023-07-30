import style from "./Card.module.css";
const Card = ({ id, name, image, imageAux, types }) => {
  return (
    <div className={style.container}>
      <h2>{id}</h2>
      <img src={image} alt="pokemon" width="200px" height="200px" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
