const initialState = {
  types: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TYPES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_TYPES_SUCCESS':
      return {
        ...state,
        loading: false,
        types: action.payload
      };
    case 'FETCH_TYPES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
