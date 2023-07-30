import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={style.navContainer}>
      <div className={style.linksContainer}>
        <div className={style.link}>
          <Link to="/home">Home</Link>
        </div>
      </div>

    </nav>
  );
};

export default Nav;
