import { Link } from "react-router-dom";
import Currency from "./Currency";
import s from "./header.module.sass";
import Langs from "./Langs";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.headerContainer}`}>
        <Link to={"/"} className={s.logo}>
          <img src="img/logo.svg" alt="" />
        </Link>
        <div className={s.box}>
          <div className={s.utils}>
            <Langs addedClass={s.utilItem} />
            <Currency addedClass={s.utilItem} />
          </div>
          <Link to={'/'} className={s.user}>
            <div className={s.name}>Eva</div>
            <img className={s.img} src="img/user.png" alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
