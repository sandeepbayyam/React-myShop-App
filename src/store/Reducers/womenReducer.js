import { UPDATE_WOMENSCLOTHING } from "../ActionTypes";
const initialState = {
    womenClothes: [],
  };
  const womenReducer = (state = initialState, action) => {
    if (action.type === UPDATE_WOMENSCLOTHING) {
      return { ...state, womenClothes: [...state.womenClothes, action.payload] };
    }
    return state;
  };
  export default womenReducer;
  