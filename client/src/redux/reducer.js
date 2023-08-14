import { GET_POKEMON, GET_POKEMON_BY_TYPES, SEARCH_POKEMON} from "./actions";

const initialState = {
  pokemons :[],
 
  
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMON_BY_TYPES:
      return {
        ...state,
        pokemons: action.payload,
      };
      case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }

}

export default reducer;
