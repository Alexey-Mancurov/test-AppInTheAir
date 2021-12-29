const SelectHeader = ({ addedClass, action, title }) => {
  return (
    <div className={addedClass} onClick={action}>
      {title}
    </div>
  );
};
export default SelectHeader;
