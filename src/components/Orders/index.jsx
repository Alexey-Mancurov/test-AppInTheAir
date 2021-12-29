import Tabs from "./Tabs";
import s from "./orders.module.sass";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../api/api";
import { SET_ORDERS } from "../../store/orders/type";
import List from "./List";
import { ordersRequest } from "./ordersRequest";

const Orders = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [currentTypeOrders, setCurrentTypeOrders] = useState("upcoming");

  const getCurrentTypeOrders = (type) => {
    setCurrentTypeOrders(type);
  };

  useEffect(() => {
    if (currentTypeOrders === "upcoming") {
      ordersRequest(setIsLoading, dispatch, "orders", SET_ORDERS);
    } else if (currentTypeOrders === "past") {
      ordersRequest(setIsLoading, dispatch, "pastOrders", SET_ORDERS);
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
