import {  FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case FILTER:
      const filterByGender = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === "All" ? state.allCharacters : filterByGender,
      };
    case ORDER:
      const orderById = [...state.allCharacters];

      return {
        ...state,
        myFavorites:
          payload === "A"
            ? orderById.sort((a, b) => a.id - b.id)
            : orderById.sort((a, b) => b.id - a.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
