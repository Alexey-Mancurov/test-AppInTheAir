import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./orders.module.sass";

const List = ({ list }) => {
  const filterParam = useSelector((state) => state.orders.filter);

  const items = list
    ?.filter((i) => i.title?.toLowerCase().includes(filterParam?.toLowerCase()))
    .map((i) => (
      <div key={i.id} className={s.orderItem}>
        <div className={s.orderMain}>
          <img className={s.orderImg} src={i.img} alt="" />
          <div className={s.orderBox}>
            <div className={s.orderTitle}>{i.title}</div>
            <div className={s.orderData}>
              <span>{i.date}</span> <span>{i.persons}</span>
              <span>{i.code}</span>
            </div>
          </div>
        </div>
        <div className={s.orderMore}>
          <div className={s.price}>{i.price}</div>
          <Link to={i.isMap ? `/order-map/${i.id}` : `/order/${i.id}`} className={s.details}>
            Order details
          </Link>
        </div>
      </div>
    ));

  return (
    <div className={s.orderList}>
      {items.length ? items : "Orders not found"}
    </div>
  );
};

export default List;
