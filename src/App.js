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

import {
  BrowserRouter as Router, Link,
  useLocation
} from "react-router-dom";

export const BuyNowHook = () => {
  function WrappedComponent(){
    return useLocation()
  }
  return <BuyNow myHookValue={WrappedComponent()} />
}

export const CheckoutHook = () => {
  function WrappedComponent(){
    return useLocation()
  }
  return <Checkout myHookValue={WrappedComponent()} />
}


function App() {

let component

switch(window.location.pathname){
case "/Samsung":
component = <Home/>
break

case "/Samsung/Shop":
component = <Shop/>
break

case "/Samsung/HomeAppliances":
component = <HomeAppliances />
break

case "/Samsung/Laptops":
component = <Laptops />
break

case "/Samsung/TVAAV":
component = <TVAAV />
break

case "/Samsung/Mobile":
component = <Mobile />
break

case "/Samsung/BuyNow":
  component = BuyNowHook()
  break

case "/Samsung/Checkout":
  component = CheckoutHook()
  break

case "/Samsung/Displays":
component = <Displays />
break
}

  return (
    <div className="App">
      <NavigationBar />
      {component}
    </div>
  );
}

export default App;
