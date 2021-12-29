import { FILTER_ORDERS, SET_ORDERS } from "./type";

const actions = {
  setUpcomingOrders: (orders) => ({
    type: SET_ORDERS,
    payload: orders,
  }),
  filterOrders:(text)=>({
    type:FILTER_ORDERS,
    payload: text
  })
};

export default actions;
