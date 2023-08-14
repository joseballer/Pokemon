import { useDispatch } from "react-redux";
import { getPokemonByTypes, getPokemons } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const type = event.target.value;
    if (type === "all") {
      dispatch(getPokemons(1));
    } else {
      dispatch(getPokemonByTypes(type));
    }
  };
  return (
    <select onChange={handleChange}>
      <option value="all">Todos</option>
      <option value="normal">Normal</option>
      <option value="fighting">Lucha</option>
      <option value="flying">Volador</option>
      <option value="poison">Veneno</option>
      <option value="ground">Tierra</option>
      <option value="rock">Roca</option>
      <option value="bug">Bicho</option>
      <option value="ghost">Fantasma</option>
      <option value="steel">Acero</option>
      <option value="fire">Fuego</option>
      <option value="water">Agua</option>
      <option value="grass">Planta</option>
      <option value="electric">Eléctrico</option>
      <option value="psychic">Psíquico</option>
      <option value="ice">Hielo</option>
      <option value="dragon">Dragón</option>
      <option value="dark">Siniestro</option>
      <option value="fairy">Hada</option>
      <option value="unknown">Desconocido</option>
      <option value="shadow">Sombra</option>
    </select>
  );
};

export default Filter;
