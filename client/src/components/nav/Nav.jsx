import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../searchbar/SearchBar";
import Filter from "../filter/Filter";

const Nav = ({ onSearch }) => {
  return (
    <nav className={style.navContainer}>
      <div className={style.linksContainer}>
        <div className={style.link}>
          <Link to="/home">Home</Link>
          <Link to="/form">Crear Pokemon</Link>
        </div>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
      <div>
        <Filter />
      </div>
    </nav>
  );
};

export default Nav;
