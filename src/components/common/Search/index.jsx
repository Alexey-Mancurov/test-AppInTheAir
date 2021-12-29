import { useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER_ORDERS } from "../../../store/orders/type";
import s from "./search.module.sass";
const Search = () => {
  const [value, setValue] = useState("");
  const getValue = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
   e.preventDefault()
   dispatch({type:FILTER_ORDERS, payload: value})
  };

  return (
    <form className={s.search} onSubmit={(e)=>handleSubmit(e)}>
      <button>
        <img className={s.icon} src="img/search.svg" alt="" />
      </button>
      <input
        className={s.input}
        type="text"
        placeholder="Search in orders"
        value={value}
        onChange={(e) => getValue(e)}
      />
    </form>
  );
};

export default Search;
