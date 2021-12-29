import { useSelector } from "react-redux";
import Item from "./Item";
import s from "./orders.module.sass";

const List = ({ list }) => {
  const filterParam = useSelector((state) => state.orders.filter);

  const items = list
    ?.filter((i) => i.title?.toLowerCase().includes(filterParam?.toLowerCase()))
    .map((i) => (
      <Item
        key={i.id}
        id={i.id}
        img={i.img}
        title={i.title}
        date={i.date}
        persons={i.persons}
        code={i.code}
        price={i.price}
        isMap={i.isMap}
      />
    ));

  return (
    <div className={s.orderList}>
      {items.length ? items : "Orders not found"}
    </div>
  );
};

export default List;
