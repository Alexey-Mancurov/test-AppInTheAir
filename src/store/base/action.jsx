import { SET_CURRENCIES, SET_CURRENCY, SET_LANGS, SET_LANGUAGE } from "./type";

const actions = {
  setLanguage: (lang) => ({
    type: SET_LANGUAGE,
    payload: lang,
  }),
  setLangs: (list) => ({
    type: SET_LANGS,
    payload: list,
  }),
  setCurrency: (currency)=>({
    type: SET_CURRENCY,
    payload: currency
  }),
  setCurrencies:(list)=>({
    type: SET_CURRENCIES,
    payload: list
  })
};

export default actions;
