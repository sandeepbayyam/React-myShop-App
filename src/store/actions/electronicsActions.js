import { UPDATE_ELECTRONICS } from "../ActionTypes";
export const getElectronics = () => {
    return (dispatch) => {
      fetch('https://fakestoreapi.com/products/category/electronics')
        .then((res) => {
          return res.json();
        })
        .then((electronics) => {
          dispatch({ type: UPDATE_ELECTRONICS, payload:electronics });
        });
    };
  };