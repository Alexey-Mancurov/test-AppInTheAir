import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TitleLarge from "../../components/common/TitleLarge";
import s from "./../pages.module.sass";

const OrderPage = () => {
  const path = useParams();

  const orderData = useSelector((state) =>
    state.orders.orders.find((i) => i.id === path.id)
  );

  return (
    <div className={`container ${s.pageContainer}`}>
      <p className={s.grayTitle}>Success, have a nice flight!</p>
      <TitleLarge title="Order details" />
      <p className={s.email}>
        Email sent on <span>a***v@gmail.com</span>{" "}
      </p>
      <div className={s.container}>
        <div className={s.box}>
          <p className={s.code}>{orderData.code}</p>
        </div>
        <div className={s.box}>
          <p className={s.titleSmall}>order amount</p>
          <p className={s.code}>{orderData.price}</p>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.boxCont}>
          <p className={s.titleSmall}>booked flights</p>
          <div className={s.wrapper}>
            <div className={s.inner}>
              <div className={s.item}>
                <p className={s.itemTitle}>{orderData.date}</p>
                <p className={s.itemInfo}>
                  Sheremetyevo Airport (SVO) Terminal 1
                </p>
              </div>
              <img className={s.arr} src="../img/arr-right.svg" alt="" />
              <div className={s.item}>
                <p className={s.itemTitle}>Mar 16, 12:45</p>
                <p className={s.itemInfo}>Koltsovo Airport (SVX) Terminal 1</p>
              </div>
            </div>
            <div className={s.info}>
              <img className={s.infoImg} src="../img/aeroflot.png" alt="" />
              <p className={s.infoTitle}>SU 1444</p>
              <p className={s.infoText}>SU Economy Lite (N)</p>
            </div>
          </div>
          <div className={s.wrapper}>
            <div className={s.inner}>
              <div className={s.item}>
                <p className={s.itemTitle}>{orderData.date}</p>
                <p className={s.itemInfo}>
                  Sheremetyevo Airport (SVO) Terminal 1
                </p>
              </div>
              <img className={s.arr} src="../img/arr-right.svg" alt="" />
              <div className={s.item}>
                <p className={s.itemTitle}>Mar 16, 12:45 </p>
                <p className={s.itemInfo}>Koltsovo Airport (SVX) Terminal 1</p>
              </div>
            </div>
            <div className={s.info}>
              <img className={s.infoImg} src="../img/aeroflot.png" alt="" />
              <p className={s.infoTitle}>SU 1444</p>
              <p className={s.infoText}>SU Economy Lite (N)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.person}>
        <p className={s.titleSmall}>Passengers</p>
        <p className={`${s.itemTitle} ${s.personTitle}`}>
          {orderData.persons}
        </p>
      </div>
      <div className={s.more}>
        <img src="../img/qr.svg" alt="" />
        <p className={`${s.itemTitle} ${s.moreTitle}`}>Track your flight</p>
        <p className={s.itemInfo}>Download App in the Air and get flight status notifications</p>
      </div>
    </div>
  );
};
export default OrderPage;
