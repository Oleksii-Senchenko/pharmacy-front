import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll, getPharmacies } from "./redux/pharmacy/operations";
const Home = lazy(()=> import("./components/Home/Home"))
const Basket = lazy(()=> import("./components/Basket/Basket"))
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
