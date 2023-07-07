import React from "react"
import styles from "./Topdeals.module.css"
import {ShowcaseGridItem} from "./ShowcaseGridItem"

import lowergridimage1 from "./Extras/lowergrid1.webp"
import lowergridimage2 from "./Extras/lowergrid2.webp"
import lowergridimage3 from "./Extras/lowergrid3.webp"
import lowergridimage4 from "./Extras/lowergrid4.webp"

export class Lowershowcase extends React.Component{
  
  constructor(props){
    super(props)
    this.navigationHook = props.navhook
    
  }
  
  render(){
    
    return(
    <div class={`${styles.gridseries} ${styles.showcase}`}>
    
    <ShowcaseGridItem navhook={this.navigationHook} images={[lowergridimage1]} colors={[0]} header={'Galaxy Book3'} price={31999} type={'tablet'} spec1={["128GB", "8GB", 74990]} spec2={["256GB", "12GB", 104990]}
    />
    <ShowcaseGridItem navhook={this.navigationHook} images={[lowergridimage2]} colors={[0]} header={'Galaxy Book3 Ultra'} price={31999} type={'tablet'} spec1={["128GB", "8GB", 74990]} spec2={["256GB", "12GB", 104990]}
    />
    <ShowcaseGridItem navhook={this.navigationHook} images={[lowergridimage3]} colors={[0]} header={'Galaxy Book3 Ultra'} price={31999}  type={'tablet'} spec1={["128GB", "8GB", 74990]} spec2={["256GB", "12GB", 104990]}
    />
    <ShowcaseGridItem navhook={this.navigationHook} images={[lowergridimage4]} colors={[0]} header={'Galaxy Book3 Ultra'} price={31999} type={'tablet'} spec1={["128GB", "8GB", 74990]} spec2={["256GB", "12GB", 104990]}
    />
    
    </div>
    )
  }
}