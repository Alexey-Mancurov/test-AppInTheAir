import Select from "../Select";
import { useSelector } from "react-redux";

const Langs = ({ addedClass }) => {
  const baseLang = useSelector((state) => state.base.baseLang);
  const langs = useSelector((state) => state.base.langs);
  return <Select title={baseLang} list={langs} addedClass={addedClass} />;
};
export default Langs;
