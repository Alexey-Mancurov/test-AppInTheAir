import s from "./select.module.sass";

const SelectList = ({ isOpen, list, action }) => {
  const items = () =>
    list?.map((i) => (
      <p key={i} onClick={() => action(i)}>
        {i}
      </p>
    ));
  return <div className={`${s.list} ${isOpen ? s.active : ""}`}>{items()}</div>;
};

export default SelectList;
