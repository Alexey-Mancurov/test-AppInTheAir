import axios from "axios";

const instanse = axios.create({
  baseURL: "https://61cabb7b194ffe00177888da.mockapi.io/api/v1/",
});

export const API = {
  base: async () => {
    try {
      const res = await instanse.get("base");
      const data = res.data[0];
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  orders: async () => {
    try {
      const { data } = await instanse.get("orders");
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  pastOrders: async () => {
    try {
      const { data } = await instanse.get("pastOrders");
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
