import { UPDATE_MENSCLOTHING } from "../ActionTypes";
const initialState = {
    menClothes:[]
  }
  const menReducer = (state=initialState,action)=>{
    if(action.type===UPDATE_MENSCLOTHING){
      return {...state,menClothes:[...state.menClothes,action.payload]}
    }
    return state;
  }
  export default menReducer;