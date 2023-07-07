import React from "react"
import styles from "./Topdeals.module.css"

import {ShowcaseGridItem} from "./ShowcaseGridItem"
import {Lowershowcase} from "./Lowershowcase"
import YoutubeEmbed from "./YoutubeEmbed"

import showcaseimage1 from "./Extras/bespokess1.webp"
import showcaseimage2 from "./Extras/bespokess2.webp"
import showcaseimage3 from "./Extras/bespokess3.webp"
import showcaseimage4 from "./Extras/bespokess4.webp"
import showcaseimage5 from "./Extras/bespokess5.webp"
import showcaseimage6 from "./Extras/bespokess6.webp"
import showcaseimage7 from "./Extras/bespokess7.webp"
import showcaseimage8 from "./Extras/bespokess8.webp"

import showcaseimageFD1_1 from "./Extras/showcaseimageFD1_1.webp"
import showcaseimageFD1_2 from "./Extras/showcaseimageFD1_2.webp"
import showcaseimageFD1_3 from "./Extras/showcaseimageFD1_3.webp"
import showcaseimageFD1_4 from "./Extras/showcaseimageFD1_4.webp"
import showcaseimageFD1_5 from "./Extras/showcaseimageFD1_5.webp"
import showcaseimageFD2_1 from "./Extras/showcaseimageFD2_1.webp"
import showcaseimageFD2_2 from "./Extras/showcaseimageFD2_2.webp"
import showcaseimageFD2_3 from "./Extras/showcaseimageFD2_3.webp"
import showcaseimageFD2_4 from "./Extras/showcaseimageFD2_3.webp"


export class Refigerator extends React.Component{
  constructor(props){
    super(props)
    
    this.navigationHook = props.navhook
    this.state={
      index:0,
      showcaseindex:0,
      ssElements:[
        
        [{images:[showcaseimage1], header:'Flex French Door BESPOKE Refrigerator', colors:["light black"], price:74990, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]}, 
      {images: [showcaseimage2], header:'Bespoke Washer Dryer Combo with AI Control & SmartThings Connectivity.', colors:["pink"], price:58990, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]},
      {images: [showcaseimage3], header:'Bespoke Jet Pet', colors:['grey'], price:109399, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]},
      {images: [showcaseimage4], header:'BESPOKE Wi-Fi Model Connectivity with Smart Things', colors:['grey'], price:35135, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'AirDresser with steam for sanitizing clothes', colors:["grey","blue", "pink"], price:31999, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]}, 
      {images: [showcaseimage6], header:"BESPOKE Family HubTM Refrigerator", colors:["grey"], price:99999, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]},
      {images: [showcaseimage7],
      header:'Galaxy Tab S7 FE (Wi-Fi, 4GB RAM)', colors:['black'], price:34999, type:'Refrigerator', spec1:["128GB", "8GB", 34999], spec2:["256GB", "12GB", 64999]}, 
      {images: [showcaseimage8], header:'BESPOKE Convertible 5in1 Side by Side Refrigerator', colors:['grey'], price:143990, type:'Refrigerator', spec1:["Single Door", "Medium", 74990], spec2:["Double Door", "Large", 104990]}]
      ]
    }
  }
  
  nextImgSlider(){
    if (this.state.index < this.state.imageslider.length - 1){
      return this.state.index + 1
    }
    else{ return (this.state.imageslider.length - 1) }
  }
  
  prevImgSlider(){
    if (this.state.index > 0){
      return this.state.index - 1
    }
    else{ return 0 }
  }

  
  insertShowcaseElements(){
    return this.state.ssElements[this.state.showcaseindex].map(element => 
      <ShowcaseGridItem navhook={this.navigationHook} images={element.images} colors={element.colors} header={element.header} price={element.price} type={element.type} spec1={element.spec1} spec2={element.spec2}/>)
  }
  
  render(){
    return(
      <React.Fragment>
      <YoutubeEmbed embedId="4x8qVXfVSvw" className={styles.imageSlider} />
      
      <h1 className={styles.headers}> Best Deals </h1>
      
      <div className={`${styles.showcase} ${styles.bespoke}`}>
      <div className={styles.showcasegrid}>
      {this.insertShowcaseElements()}
      </div>
      </div>
    
      <h1 className={styles.headers}> Ultimate school bundles </h1>
      
      <Lowershowcase navhook={this.navigationHook} />
      
      <div  className={styles.conditions}> 
      <p> It's time for you to stock up on all your favourite Samsung products and unfold the right tools for your future. Samsung's Back to School sale features amazing discounts on laptops, tablets, and monitors. You can also earn discounts and offers by referring friends and family! Unleash your school spirit and grab great deals. </p>
      
      <p> Here are some amazing offers you don't want to miss:</p>
      <p> • Get up to 15%* off on Galaxy Book, Tab & Monitor</p>
      <p>• Get up to ₹ 20,000* cashback on ICICI, HDFC, SBI, and other leading banks</p>
      <p>• Get Welcome vouchers worth ₹ 5,000 on the Samsung Shop App </p>
      </div>
      </React.Fragment>
      )
  }
  
}