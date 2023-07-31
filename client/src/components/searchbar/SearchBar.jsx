

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(name)}>Buscar</button>
    </div>
  );
};
export default SearchBar;
