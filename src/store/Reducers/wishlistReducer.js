import { ADD_TO_WISHLIST,REMOVE_WISHLIST } from "../ActionTypes";

const initialState = {
    wishlist: [],
  };
  const wishlistReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_WISHLIST) {
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }

    if(action.type===REMOVE_WISHLIST){
      const temp = [...state.wishlist];
      temp.splice(action.payload,1)
      return{
        ...state,
      wishlist:temp
      }
    }

    return state;
  };
  export default wishlistReducer;