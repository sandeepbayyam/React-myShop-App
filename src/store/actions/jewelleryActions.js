import { UPDATE_JEWELLERY } from "../ActionTypes";
export const getJewelery = () => {
    return (dispatch) => {
      fetch('https://fakestoreapi.com/products/category/jewelery')
        .then((res) => {
          return res.json();
        })
        .then((jewelery) => {
          dispatch({ type: UPDATE_JEWELLERY, payload:jewelery });
        });
    };
  };