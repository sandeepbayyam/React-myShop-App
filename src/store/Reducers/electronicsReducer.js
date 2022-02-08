import { UPDATE_ELECTRONICS } from "../ActionTypes";
const initialState = {
    electronics:[]
  }
  const electronicsReducer = (state=initialState,action)=>{
    if(action.type===UPDATE_ELECTRONICS){
      return {...state,electronics:[...state.electronics,action.payload]}
    }
    return state;
  }
  export default electronicsReducer;