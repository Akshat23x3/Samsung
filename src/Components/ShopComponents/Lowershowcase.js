import React from "react"
import styles from "./Topdeals.module.css"
import {ShowcaseGridItem} from "./ShowcaseGridItem"

import lowergridimage1 from "./Extras/lowergrid1.webp"
import lowergridimage2 from "./Extras/lowergrid2.webp"
import lowergridimage3 from "./Extras/lowergrid3.webp"
import lowergridimage4 from "./Extras/lowergrid4.webp"

export class Lowershowcase extends React.Component{
  
  constructor(){
    super()
    
    
  }
  
  render(){
    
    return(
    <div class={`${styles.gridseries} ${styles.showcase}`}>
    
    <ShowcaseGridItem images={[lowergridimage1]} colors={[0]} header={"Galaxy Book3 Ultra"} price={"Get Odyssey OLED G8 Gaming Monitor @ Rs.31999"}
    />
    <ShowcaseGridItem images={[lowergridimage2]} colors={[0]} header={"Galaxy Book3 Ultra"} price={"Get Smartcover Keyboardat 60% off*"}
    />
    <ShowcaseGridItem images={[lowergridimage3]} colors={[0]} header={"Galaxy Book3 Ultra"} price={"Get Book Cover @Rs.999"}
    />
    <ShowcaseGridItem images={[lowergridimage4]} colors={[0]} header={"Galaxy Book3 Ultra"} price={"Get Odyssey OLED G8 Gaming Monitor @ Rs.31999"}
    />
    
    </div>
    )
  }
}