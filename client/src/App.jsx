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
    axios(`http://localhost:3001/pokemon?name=${name}`)
      .then((response) => {
        if (response.data.length === 0) {
          window.alert(`No Pokemon found with the name '${name}'`);
        } else {
          setPokemons(response.data);
        }
      })
      .catch((error) => {
        window.alert(
          `An error occurred while searching for the Pokemon: ${error.message}`
        );
      });
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
          <Route path="/home" element={<Cards characters={pokemons} />} />
          <Route path="/detail/:id" element={<Detail />} />
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
