import { UPDATE_MENSCLOTHING } from "../ActionTypes";
export const getMenClothings = () => {
    return (dispatch) => {
      fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then((res) => {
          return res.json();
        })
        .then((menClothes) => {
          dispatch({ type: UPDATE_MENSCLOTHING, payload:menClothes });
        });
    };
  };