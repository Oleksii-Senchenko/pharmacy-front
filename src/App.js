import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll, getPharmacies } from "./redux/pharmacy/operations";
import ShopingCard from "./components/Basket/Basket";
import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPharmacies());
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
}
export default App;
