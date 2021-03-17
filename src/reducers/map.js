const initState = {};

const map = (state = initState, action) => {
  switch (action.type) {
    case "SET_MAP_INSTANCE":
      return {
        ...state,
        map_object: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default map;
