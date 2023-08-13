
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, fetchTypes} from '../../redux/actions';



const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
    if (event.target.value !== 'all') {
      dispatch(fetchTypes(event.target.value));
    }
  }
  

  return (
    <select value={filter} onChange={handleChange}>
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
}

export default Filter;
