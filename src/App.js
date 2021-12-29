import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { API } from "./api/api";
import Header from "./components/Header";
import { useDispatch } from 'react-redux'
import { SET_CURRENCIES, SET_CURRENCY, SET_LANGS, SET_LANGUAGE } from "./store/base/type";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import OrderMapPage from "./pages/OrderMapPage/OrderMapPage";

function App() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    const baseRequest =(async()=>{
      const data = await API.base()

      dispatch({type:SET_LANGUAGE, payload: data.baseLang})
      dispatch({type:SET_LANGS, payload: data.langs})
      dispatch({type:SET_CURRENCY, payload: data.baseCurrency})
      dispatch({type:SET_CURRENCIES, payload: data.currencies})
    })()
  },[])

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path="order/:id" element={<OrderPage />}/>
          <Route path="order-map/:id" element={<OrderMapPage />}/>
        </Routes>
    </div>
  );
}

export default App;
