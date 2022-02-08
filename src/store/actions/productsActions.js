import { UPDATE_PRODUCTS } from "../ActionTypes";
export const getProducts = () => {
    return (dispatch) => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => {
          return res.json();
        })
        .then((products) => {
          dispatch({ type: UPDATE_PRODUCTS, payload: products });
        });
    };
  };