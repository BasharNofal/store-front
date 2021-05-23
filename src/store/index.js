import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./products";
import categoriesReducer from './categories';

const reducers = combineReducers({ products: productsReducer, categories: categoriesReducer });
// in some component state.counter.totalVotes / .candidates
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();