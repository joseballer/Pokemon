import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, types }) => {
  console.log(types);
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className={style.container}>
          <h2>{id}</h2>
          <img src={image} alt="pokemon" width="150px" height="150px" />
          <h1>{name}</h1>
          <ul>
            {types.map((type) => (
              <li key={type.id}>{type.name}</li>
            ))}
          </ul>
        </div>
      </Link>
    </>
  );
};

export default Card;
