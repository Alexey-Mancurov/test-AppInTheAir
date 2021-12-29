import { combineReducers } from "redux";
import { createStore } from "redux";
import baseReducer from "./base/reducer";
import ordersReducer from "./orders/reducer";

const rootReducer = combineReducers({
  base: baseReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default store;
