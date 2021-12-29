import { useEffect, useState } from "react";
import SelectHeader from "./SelectHeader";
import SelectList from "./SelectList";
import s from "./select.module.sass";


const Select = ({title, list, addedClass}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const [currentEl, setCurrentEl] = useState("");
  const [langsList, setLangsList] = useState();


  useEffect(() => {
    setCurrentEl(title);
    setLangsList(list);
  }, [title, list]);

  const getCurrentEl = (lang) => {
    setCurrentEl(lang);
    setIsOpen(false);
  };
  return <div className={`${s.select} ${addedClass && addedClass}`}>
  <SelectHeader addedClass={s.header} action={getIsOpen} title={currentEl}/>
  <SelectList isOpen={isOpen} list={langsList} action={getCurrentEl}/>
</div>
};
export default Select;
