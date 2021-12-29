const TitleLarge = ({ title, addedClass }) => {
  return <h1 className={addedClass && addedClass}>{title}</h1>;
};
export default TitleLarge;
