import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/landing/landing";
import Detail from "./views/detail/Detail";
import Nav from "./components/nav/Nav";
import Form from "./views/form/Form";
import Home from "./views/home/home";
import { getPokemons , searchPokemon} from "./redux/actions";


function App() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(page));
  }, [page]);

  useSelector((state) => state.pokemons)
  
  
  const onSearch = (name) => {
    dispatch(searchPokemon(name));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleFirstPage = () => {
    setPage(1);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/home") {
      setPage(1);
    }
  }, [pathname]);

  return (
    <div>
      <div>
        {pathname !== "/" && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </div>
      <div>
        {pathname === "/home" && (
          <button onClick={handleFirstPage}>First Page</button>
        )}
        {pathname === "/home" && (
          <button onClick={handlePrevPage}>Prev Page</button>
        )}
        {pathname === "/home" && (
          <button onClick={handleNextPage}>Next Page</button>
        )}
      </div>
    </div>
  );
}

export default App;
