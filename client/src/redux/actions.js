import axios from 'axios';

export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_BY_TYPES = 'GET_POKEMON_BY_TYPES';

export const getPokemons = (page) => {
  return async (dispatch) => {
    const pokemons = await axios.get(`http://localhost:3001/pokemons?page=${page}`);
    dispatch({ type: GET_POKEMON, payload: pokemons.data });
  };

}

export const getPokemonByTypes = (type) => {
  return async (dispatch) => {
    const pokemons = await axios.get(`http://localhost:3001/type?type=${type}`);
    dispatch({ type: GET_POKEMON_BY_TYPES, payload: pokemons.data });
  };

}