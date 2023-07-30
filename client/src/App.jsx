import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Cards from "./components/cards/Cards";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons?page=${page}`)
      .then((response) => setPokemons(response.data[0]));
  }, [page]);
  
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards characters={pokemons} />} />
      </Routes>
      <button onClick={handleNextPage}>Next Page</button>
      <button onClick={handlePrevPage}>Prev Page</button>

    </div>
  );
}

export default App;
