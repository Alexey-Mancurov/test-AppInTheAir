import Orders from "../../components/Orders";
import TitleSearch from "../../components/TitleSearch";
import s from "./../pages.module.sass";
const MainPage = () => {
  return (
    <div className={`container ${s.pageContainer}`}>
        <TitleSearch title={"Order"} />
        <Orders />
    </div>
  );
};

export default MainPage;
