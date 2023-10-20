// store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './AppData/Actiondetail/Reducer';
console.log("data",cartReducer)
const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
