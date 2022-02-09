import { ADD_TO_CART ,REMOVE_CART,} from "../ActionTypes"
export const addToCart = (product)=>{
    return {type:ADD_TO_CART, payload:product}
  }
  export const removeCart = (i)=>{
    return {type:REMOVE_CART,payload:i}
  }