import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import AboutContainer from "./components/AboutContainer";
import Search from "./components/Search";
import Address from "./components/address";
import ShippingAddressScreen from "./components/ShippingAddressScreen";
import Thankyou from "./components/Thankyou";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';




const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/aboutus" element={<AboutContainer/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/payment" element={<ShippingAddressScreen/>}/>
            <Route path="/thankyou" element={<Thankyou/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );

};

export default App;
