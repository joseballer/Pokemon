import axios from "axios";
export const FILTER = "FILTER";
export const ORDER = "ORDER";




export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order
  };
};
