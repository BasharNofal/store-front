import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart';

const reducers = combineReducers({ arrOfProducts: productsReducer, categories: categoriesReducer, cartList: cartReducer });
// in some component state.counter.totalVotes / .candidates
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();