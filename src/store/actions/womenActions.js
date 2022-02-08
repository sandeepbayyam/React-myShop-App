import { UPDATE_WOMENSCLOTHING } from "../ActionTypes";
export const getWomenClothings = () => {
    return (dispatch) => {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then((res) => {
          return res.json();
        })
        .then((womenClothes) => {
          dispatch({ type: UPDATE_WOMENSCLOTHING, payload:womenClothes });
        });
    };
  };