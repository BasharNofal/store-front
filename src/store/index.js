import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart';

const reducers = combineReducers({ products: productsReducer, categories: categoriesReducer, cartList: cartReducer });
// in some component state.counter.totalVotes / .candidates
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();