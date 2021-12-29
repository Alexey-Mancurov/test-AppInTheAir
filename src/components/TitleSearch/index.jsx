import { useState } from "react";
import Search from "../common/Search";
import TitleLarge from "../common/TitleLarge";
import s from './titleSearch.module.sass'

const TitleSearch = ({title, addedClass}) => {
  const [order, setOrder]=useState('')
  return (
    <div className={`${s.mainHeader} ${addedClass && addedClass}`}>
      <TitleLarge title={title} />
      <Search order={setOrder}/>
    </div>
  );
};

export default TitleSearch;
