export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
};

//fnMap is a map of teh functions we create inside the reducer
// [type] => object braket notation: the object is going to be passed as a string
