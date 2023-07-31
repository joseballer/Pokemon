import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/landing/landing";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Nav from "./components/nav/Nav";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons?page=${page}`)
      .then((response) => setPokemons(response.data[0]));
  }, [page]);

  const onSearch = (name) => {
    axios(`http://localhost:3001/pokemons?name=${name}`)
      .then(({ data }) => {
        setPokemons(data);
      })
      .catch(() => {
        window.alert("Este nombre no existe");
      });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const { pathname } = useLocation();
  return (
    <div>
      <div>
        {pathname !== "/" && <Nav onSearch={onSearch} />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Cards characters={pokemons} />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
      <div>
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
