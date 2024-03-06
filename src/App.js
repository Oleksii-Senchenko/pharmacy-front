import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAll, getPharmacies } from "./redux/pharmacy/operations";
import Home from "./components/Home/Home";
import Basket from "./components/Basket/Basket";
import { Context } from "./context";
function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    dispatch(getPharmacies());
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Context.Provider
      value={{
        setName,
        setEmail,
        setPhone,
        setAddress,
        name,
        email,
        phone,
        address,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}
export default App;
