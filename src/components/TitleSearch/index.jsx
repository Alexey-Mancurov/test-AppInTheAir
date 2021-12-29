import Search from "../common/Search";
import TitleLarge from "../common/TitleLarge";
import s from './titleSearch.module.sass'

const TitleSearch = ({title, addedClass}) => {
  return (
    <div className={`${s.mainHeader} ${addedClass && addedClass}`}>
      <TitleLarge title={title} />
      <Search />
    </div>
  );
};

export default TitleSearch;
