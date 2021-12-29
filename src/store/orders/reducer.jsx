import { FILTER_ORDERS, SET_ORDERS } from "./type";

const initialState = {
  orders: [],
  filter: ''
};
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return { ...state, orders: action.payload };

    case FILTER_ORDERS:
      return { ...state, filter: action.payload };


    default:
      return state;
  }
};

export default ordersReducer;
