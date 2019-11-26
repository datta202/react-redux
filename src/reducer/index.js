import { CALL_CONSOLE } from "../constants";

const initialState = {
  data: []
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case CALL_CONSOLE:
      console.log("called");
      return state;
    default:
      return state;
  }
};

export default reducer;
