import {NavigationBar} from "./Components/NavigationBar"
import {Home} from "./Components/Home"
import {HomeAppliances} from "./Components/HomeAppliances"
import {Mobile} from "./Components/Mobile"
import {Laptops} from "./Components/Laptops"
import {Shop} from "./Components/Shop"
import {TVAAV} from "./Components/TVAAV"
import {Displays} from "./Components/Displays"
import {BuyNow} from "./Components/ShopComponents/BuyNow"
import {Checkout} from "./Components/ShopComponents/Checkout"
import styles from "./App.css"

import {useNavigate} from "react-router-dom"

import {
  BrowserRouter as Router, Link, Routes, Route,
  useLocation
} from "react-router-dom";

export const BuyNowHook = () => {
  function WrappedComponent(){
    return useLocation()
  }
  return <BuyNow navhook={useNavigate()} myHookValue={WrappedComponent()} />
}

export const CheckoutHook = () => {
  function WrappedComponent(){
    return useLocation()
  }
  return <Checkout navhook={useNavigate()} myHookValue={WrappedComponent()} />
}


function App() {


  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/Samsung" element={<Home navhook={useNavigate()} />} />
        <Route path="/Samsung/Shop" element={<Shop  navhook={useNavigate()} />} />
        <Route path="/Samsung/HomeAppliances" element={<HomeAppliances  navhook={useNavigate()} />} />
        <Route path="/Samsung/Laptops" element={<Laptops  navhook={useNavigate()} />} />
        <Route path="/Samsung/TVAAV" element={<TVAAV  navhook={useNavigate()} />} />
        <Route path="/Samsung/Mobile" element={<Mobile  navhook={useNavigate()} />} />
        <Route path="/Samsung/Displays" element={<Displays  navhook={useNavigate()} />} />
        <Route path="/Samsung/Buynow" element={BuyNowHook()} />
        <Route path="/Samsung/Checkout" element={CheckoutHook()} />
      </Routes>
    </div>
  );
}

export default App;
