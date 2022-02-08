import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk  from "redux-thunk";
import cartReducer from './Reducers/cartReducer';
import productsReducer from './Reducers/productsReducer';
import menReducer from './Reducers/menReducer';
import womenReducer from './Reducers/womenReducer';
import electronicsReducer from './Reducers/electronicsReducer';
import jewelleryReducer from './Reducers/jewelleryReducer';
import wishlistReducer from './Reducers/wishlistReducer';

const rootReducer = combineReducers(
    {
        cart:cartReducer,
        wishlist:wishlistReducer,
        products:productsReducer,
        men:menReducer,
        women:womenReducer,
        electronics:electronicsReducer,
        jewellery:jewelleryReducer
    }
);
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;