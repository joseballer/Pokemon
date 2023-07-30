import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = ({ id, name, image, types }) => {
  return (
    <div className={style.container}>
      <h2>{id}</h2>
      <img src={image} alt="pokemon" width="200px" height="200px" />
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default Card;
