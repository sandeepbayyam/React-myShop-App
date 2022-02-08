import { ADD_TO_CART, REMOVE_CART } from "../ActionTypes";

const initialState = {
    cart: [],
  };
  const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
      return { ...state,
               cart: [...state.cart, action.payload],
              };
    } 

    if(action.type===REMOVE_CART){
      const temp = [...state.cart];
      temp.splice(action.payload,1)
      return{
        ...state,
        cart:temp
      }
    }
    return state;
  };
  export default cartReducer;
  