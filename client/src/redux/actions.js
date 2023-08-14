import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_BY_TYPES = "GET_POKEMON_BY_TYPES";
export const SEARCH_POKEMON = "SEARCH_POKEMON";

export const getPokemons = (page) => {
  return async (dispatch) => {
    const pokemons = await axios.get(`http://localhost:3001/pokemons?page=${page}`);
    dispatch({ type: GET_POKEMON, payload: pokemons.data[0] });
  };
};

export const getPokemonByTypes = (type) => {
  return async (dispatch) => {
    const pokemons = await axios.get(`http://localhost:3001/types?type=${type}`);
    dispatch({ type: GET_POKEMON_BY_TYPES, payload: pokemons.data });
  };
};

export const searchPokemon = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    if (response.data.length === 0) {
      window.alert(`No Pokemon found with the name '${name}'`);
    } else {
      dispatch({ type: SEARCH_POKEMON, payload: response.data });
    }
  };
};
