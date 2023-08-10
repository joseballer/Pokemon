import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, nombre, imagen }) => {
  
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className={style.container}>
          <h2 key={id}>{id}</h2>
          <img src={imagen} alt="pokemon" width="150px" height="150px" />
          <h1>{nombre}</h1>
          {/* <ul>
            {tipo.map((type) => (
              <li key={type.ID}>{type.Nombre}</li>
            ))}
          </ul> */}
        </div>
      </Link>
    </>
  );
};

export default Card;
