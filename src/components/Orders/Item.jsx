import { Link } from "react-router-dom";
import s from "./orders.module.sass";


const Item = ({id,img, title, date, persons, code, price, isMap }) => {
  return (
    <div  className={s.orderItem}>
      <div className={s.orderMain}>
        <img className={s.orderImg} src={img} alt="" />
        <div className={s.orderBox}>
          <div className={s.orderTitle}>{title}</div>
          <div className={s.orderData}>
            <span>{date}</span> <span>{persons}</span>
            <span>{code}</span>
          </div>
        </div>
      </div>
      <div className={s.orderMore}>
        <div className={s.price}>{price}</div>
        <Link
          to={isMap ? `/order-map/${id}` : `/order/${id}`}
          className={s.details}
        >
          Order details
        </Link>
      </div>
    </div>
  );
};
export default Item;
