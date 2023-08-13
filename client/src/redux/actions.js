import axios from 'axios';

export const fetchTypes = (type) => async (dispatch) => {
  dispatch({ type: 'FETCH_TYPES_REQUEST' });
  try {
    const response = await axios.get(`http://localhost:3001/types?type=${type}`);
    dispatch({ type: 'FETCH_TYPES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TYPES_FAILURE', payload: error.message });
  }
};

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
});