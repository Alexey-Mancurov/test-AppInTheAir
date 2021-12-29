import s from "./orders.module.sass";

const Tabs = ({ action, currentTab }) => {
  return (
    <div className={s.tabList}>
      <div
        className={`${s.item} ${currentTab === "upcoming" && s.active}`}
        onClick={() => action("upcoming")}
      >
        Upcoming
      </div>
      <div className={`${s.item} ${currentTab === "past" && s.active}`} onClick={() => action("past")}>
        Past
      </div>
    </div>
  );
};

export default Tabs;
