import { UPDATE_PRODUCTS } from "../ActionTypes";
const initialState = {
    products :[]
}
const productReducer = (state=initialState,action)=>{
    if (action.type ===UPDATE_PRODUCTS){
        return{
            ...state,products:[...state.products,action.payload]
        }
    }

 return state;
}
export default productReducer;