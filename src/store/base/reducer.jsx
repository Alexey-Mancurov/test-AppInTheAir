import { SET_CURRENCIES, SET_CURRENCY, SET_LANGS, SET_LANGUAGE } from "./type";
const initialState = {
  baseLang: "English",
  langs: [],
  currency: "USD - $",
  currencyList: []
};
const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, baseLang: action.payload };

    case SET_LANGS:
      return { ...state, langs: action.payload };

    case SET_CURRENCY:
      return { ...state, currency: action.payload };

    case SET_CURRENCIES:
      return {...state, currencyList:action.payload}

    default:
      return state;
  }
};

export default baseReducer;
