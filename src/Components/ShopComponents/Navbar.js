import React from "react"
import styles from "./Navbar.module.css"

import {Topdeals} from "./Topdeals"
import {Bespoke} from "./Bespoke"
import {Footer} from "./Footer"
import {Mobile} from "./Mobile"
import {Television} from "./Television"
import {Refigerator} from "./Refigerator"
import {WashingMachine} from "./WashingMachine"
import {Airconditioners} from "./Airconditioners"
import {Tab} from "./Tab"
import {Laptops} from "./Laptops"
import {Kitchencare} from "./Kitchencare"
import {Accessories} from "./Accessories"
import {BuyNow} from "./BuyNow"

import topdeals from "./Extras/Topdeals.webp"
import bespokeHeader from "./Extras/bespoke-living.webp"
import mobile from "./Extras/mobile.webp"
import tv from "./Extras/tv.webp"
import refigerators from "./Extras/refigerators.webp"
import ACHeader from "./Extras/ACHeader.webp"
import kitchenHeader from "./Extras/kitchenHeader.webp"
import laptopsHeader from "./Extras/laptopsHeader.png"
import tabsHeader from "./Extras/tabsHeader.webp"
import watchHeader from "./Extras/watchHeader.webp"
import wmHeader from "./Extras/wmHeader.webp"

export class Navbar extends React.Component{
constructor(props){
super(props)

this.state={
  linkIndex:0,
  links:[<Topdeals navhook={props.navhook}/>, <Bespoke navhook={props.navhook}/>, <Mobile navhook={props.navhook}/>, <Television navhook={props.navhook}/>, <Refigerator navhook={props.navhook}/>, <WashingMachine navhook={props.navhook}/>, <Airconditioners navhook={props.navhook}/>, <Tab navhook={props.navhook}/>,
  <Laptops navhook={props.navhook}/>, <Kitchencare navhook={props.navhook}/>, <Accessories navhook={props.navhook}/>]
  // , <Bespoke/>, <Mobile/>, <Television/>, <Refigerators/>,
  // <Washingmachine/>, <Airconditioner/>, <Tablets/>, <Laptops/>, <Kitchen/>,
  // <Accessories/>]
}
}

changeContent = (index) => {
  this.setState({linkIndex:index});
}

insertComponent(){
  return this.state.links[this.state.linkIndex];
}

HeaderComponent = (headerImg, headerName, linkIndex) => {
  return(
    <React.Fragment>
    <button onClick={() => this.changeContent(linkIndex)}>
    <img src={headerImg} className={styles.headerImage}/>
    <p> {headerName} </p>
    </button>
    </React.Fragment>
    )
}

render(){
return(

<div className={styles.Navbar}>

<ul>
<li> {this.HeaderComponent(topdeals, "Top Deals", 0)} </li>
<li>  {this.HeaderComponent(bespokeHeader, "Bespoke", 1)}</li>
<li> {this.HeaderComponent(mobile, "Mobile", 2)}</li>
<li> {this.HeaderComponent(tv, "Television", 3)}</li>
<li>  {this.HeaderComponent(refigerators, "Refigerators",4 )}</li>
<li>  {this.HeaderComponent(wmHeader, "Washing Machines",5)}</li>
<li>  {this.HeaderComponent(ACHeader, "Air Conditioners", 6)}</li>
<li>  {this.HeaderComponent(tabsHeader, "Tablets", 7)}</li>
<li>  {this.HeaderComponent(laptopsHeader, "Laptops", 8)}</li>
<li>  {this.HeaderComponent(kitchenHeader, "Kitchen Care", 9)}</li>
<li>  {this.HeaderComponent(watchHeader, "Accessories", 10)}</li>
</ul>

{this.insertComponent()}

<Footer />
</div>
)
}

}