import Tabs from "./Tabs";
import s from "./orders.module.sass";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../api/api";
import { SET_ORDERS } from "../../store/orders/type";
import List from "./List";

const Orders = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [currentTypeOrders, setCurrentTypeOrders] = useState("upcoming");

  const getCurrentTypeOrders = (type) => {
    setCurrentTypeOrders(type);
  };

  useEffect(() => {
    if (currentTypeOrders === "upcoming") {
      const ordersRequest = (async () => {
        setIsLoading(true);
        const data = await API.orders();
        dispatch({ type: SET_ORDERS, payload: data });
        setIsLoading(false);
      })();
    } else if (currentTypeOrders === "past") {
      const ordersRequest = (async () => {
        setIsLoading(true);
        const data = await API.pastOrders();
        dispatch({ type: SET_ORDERS, payload: data });
        setIsLoading(false);
      })();
    }
  }, [currentTypeOrders]);

  const upcomingOpders = useSelector((state) => state.orders.orders);

  return (
    <div className={s.wrapper}>
      <Tabs currentTab={currentTypeOrders} action={getCurrentTypeOrders} />
      {isLoading ? (
        <div className={s.load}>Идет загрузка</div>
      ) : (
        <List list={upcomingOpders} />
      )}
    </div>
  );
};

export default Orders;
