import { useSelector } from "react-redux";
import Select from "../Select";

const Currency =({addedClass})=>{
    const baseCurrency = useSelector((state) => state.base.currency);
    const Сurrencies = useSelector((state) => state.base.currencyList);
    return <Select title={baseCurrency} list={Сurrencies} addedClass={addedClass}/>
}

export default Currency