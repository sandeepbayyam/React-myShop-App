import { UPDATE_JEWELLERY } from "../ActionTypes";
const initialState = {
    jewellery:[]
   }
   const jewelleryReducer = (state=initialState,action)=>{
     if(action.type===UPDATE_JEWELLERY){
       return {...state,jewellery:[...state.jewellery,action.payload]}
     }
     return state;
   }
   export default jewelleryReducer;