import { ADD_TO_WISHLIST,REMOVE_WISHLIST } from "../ActionTypes"


export const addToWishlist = (product)=>{
    return {type:ADD_TO_WISHLIST,payload:product}
  }

  export const removeWishlist = (i)=>{
    return {type:REMOVE_WISHLIST,payload:i}
  }