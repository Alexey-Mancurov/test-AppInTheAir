import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TitleLarge from "../../components/common/TitleLarge";
import s from "./../pages.module.sass";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const OrderMapPage = () => {
  const path = useParams();

  const orderData = useSelector((state) =>
    state.orders.orders.find((i) => i.id === path.id)
  );

  return (
    <div className={`container ${s.wrapper}`}>
      <div className={s.wrapperBody}>
        <p className={s.grayTitle}>Reservation is confirmed!</p>
        <TitleLarge title="Order details" />
        <p className={s.email}>
          Email sent on <span>a***v@gmail.com</span>
        </p>
        <div className={s.wrapContainer}>
          <div className={s.wrap}>
            <p className={s.titleSmall}>Confirmation number</p>
            <p className={s.code}>2691.438.025</p>
          </div>
          <div className={s.wrap}>
            <p className={s.titleSmall}>pin</p>
            <p className={s.code}>1612</p>
          </div>
        </div>
        <div className={s.box}>
          <p className={s.code}>
            Crowne Plaza HY36 Midtown Manhattan, an IHG Hotel
          </p>
          <p className={s.infoText}>
            1 Room: Classic King Mobility and Hearing Accessible Guest Room with
            Tub
          </p>
        </div>
        <div className={s.container}>
          <div className={s.boxCont}>
            <div className={s.wrapper}>
              <div className={s.inner}>
                <div className={s.item}>
                  <p className={s.itemTitle}>Mar 16, 10:20</p>
                  <p className={s.itemInfo}>
                    Sheremetyevo Airport (SVO) Terminal 1
                  </p>
                </div>
                <img className={s.arr} src="../img/arr-right.svg" alt="" />
                <div className={s.item}>
                  <p className={s.itemTitle}>Mar 16, 12:45 </p>
                  <p className={s.itemInfo}>
                    Koltsovo Airport (SVX) Terminal 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.person}>
          <p className={s.titleSmall}>guests</p>
          <p className={`${s.itemTitle} ${s.personTitle}`}>
            {orderData.persons}
          </p>
        </div>
        <div className={s.person}>
          <p className={s.titleSmall}>Adress</p>
          <p className={`${s.itemTitle} ${s.personTitle}`}>
            320 W 36th St, New York, NY 10018 <br />
            +1 8 692 52 000
          </p>
        </div>
        <div className={s.person}>
          <p className={s.titleSmall}>cancellation policy</p>
          <p className={`${s.itemTitle} ${s.personTitle}`}>
            FREE cancellation Until 4:00 PM local hotel time on Mon 16 Mar 2021
          </p>
        </div>
        <div className={s.person}>
          <p className={s.titleSmall}>order amount</p>
          <p className={`${s.code}`}>{orderData.price}</p>
        </div>
      </div>
      <div>
        <YMaps>
          <Map
            defaultState={{
              center: [55.75, 37.6],
              zoom: 12,
              controls: [],
            }}
            className={s.map}
          >
            <Placemark defaultGeometry={[55.765, 37.606]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default OrderMapPage;
