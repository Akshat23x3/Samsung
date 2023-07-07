import React from "react"
import styles from "./Components.module.css"

import {ShowcaseGridItem} from "./ShowcaseGI"
import {Lowershowcase} from "./LowerShowcase"
import {Footer} from "./ShopComponents/Footer"

import image1 from "./ShopComponents/Extras/accis1.webp"
import leftbtn from "./ShopComponents/Extras/leftbtn.png"
import rightbtn from "./ShopComponents/Extras/rightbtn.png"
import showcaseimage1 from "./ShopComponents/Extras/showcaseimage1.webp"
import showcaseimage2 from "./ShopComponents/Extras/showcaseimage2.webp"
import showcaseimage2_2 from "./ShopComponents/Extras/showcaseimage2_2.webp"
import showcaseimage2_3 from "./ShopComponents/Extras/showcaseimage2_3.webp"
import showcaseimage3 from "./ShopComponents/Extras/showcaseimage3.webp"
import showcaseimage4 from "./ShopComponents/Extras/showcaseimage4.webp"
import showcaseimage5 from "./ShopComponents/Extras/showcaseimage5.webp"
import showcaseimage6 from "./ShopComponents/Extras/showcaseimage6.webp"
import showcaseimage7_1 from "./ShopComponents/Extras/showcaseimage7_1.webp"
import showcaseimage7_2 from "./ShopComponents/Extras/showcaseimage7_2.webp"
import showcaseimage7_3 from "./ShopComponents/Extras/showcaseimage7_3.webp"
import showcaseimage7_4 from "./ShopComponents/Extras/showcaseimage7_4.webp"
import showcaseimage8 from "./ShopComponents/Extras/showcaseimage8.webp"

import showcaseimageFD1_1 from "./ShopComponents/Extras/showcaseimageFD1_1.webp"
import showcaseimageFD1_2 from "./ShopComponents/Extras/showcaseimageFD1_2.webp"
import showcaseimageFD1_3 from "./ShopComponents/Extras/showcaseimageFD1_3.webp"
import showcaseimageFD1_4 from "./ShopComponents/Extras/showcaseimageFD1_4.webp"
import showcaseimageFD1_5 from "./ShopComponents/Extras/showcaseimageFD1_5.webp"
import showcaseimageFD2_1 from "./ShopComponents/Extras/showcaseimageFD2_1.webp"
import showcaseimageFD2_2 from "./ShopComponents/Extras/showcaseimageFD2_2.webp"
import showcaseimageFD2_3 from "./ShopComponents/Extras/showcaseimageFD2_3.webp"
import showcaseimageFD2_4 from "./ShopComponents/Extras/showcaseimageFD2_3.webp"


export class Displays extends React.Component{
  constructor(){
    super()
    
    this.state={
      index:0,
      imageslider:[image1],
      sliderheaders:["28L SlimFry™, Convection Microwave Oven"],
      sliderdescription:["Avail benifits upto Rs. 10000"],
      showcaseindex:0,
      ssElements:[
        
        [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], price:74990, type:'laptop'}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], price:58990, type:'tablet'},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv'},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], price:35135, type:'tv'}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'Galaxy Tab S6 Lite (Wi-Fi, 4GB)', colors:["grey","blue", "pink"], price:31999, type:'tablet'}, 
      {images: [showcaseimage6], header:"Galaxy Tab S8 Ultra (Wi-Fi)", colors:["grey"], price:99999, type:'tablet'},
      {images: [showcaseimage7_1, showcaseimage7_2, showcaseimage7_3, showcaseimage7_4],
      header:'Galaxy Tab S7 FE (Wi-Fi, 4GB RAM)', colors:['black', 'green', 'light black', 'pink'], price:34999, type:'mobile'}, 
      {images: [showcaseimage8], header:'Galaxy Book3 Pro, 35.56cm (14"), i7, 16GB, Intel Xe Graphics', colors:['grey'], price:143990, type:'laptop'}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], price:74990, type:'laptop'}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], price:58990, type:'tablet'}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], price:74990, type:'laptop'}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], price:58990, type:'tablet'},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv'}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], price:74990, type:'laptop'}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], price:58990, type:'tablet'},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv'},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], price:35135, type:'tv'}],
      
       [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], price:74990}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], price:58990},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], price:35135}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'Galaxy Tab S6 Lite (Wi-Fi, 4GB)', colors:["grey","blue", "pink"], price:31999}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], price:74990, type:'laptop'}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], price:58990, type:'tablet'},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv'},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], price:35135, type:'tv'}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'Galaxy Tab S6 Lite (Wi-Fi, 4GB)', colors:["grey","blue", "pink"], price:31999, type:'tablet'}, 
      {images: [showcaseimage6], header:"Galaxy Tab S8 Ultra (Wi-Fi)", colors:["grey"], price:99999, type:'tablet'},
      {images: [showcaseimage7_1, showcaseimage7_2, showcaseimage7_3, showcaseimage7_4],
      header:'Galaxy Tab S7 FE (Wi-Fi, 4GB RAM)', colors:['black', 'green', 'light black', 'pink'], price:34999, type:'mobile'}, 
      {images: [showcaseimage8], header:'Galaxy Book3 Pro, 35.56cm (14"), i7, 16GB, Intel Xe Graphics', colors:['grey'], price:143990, type:'laptop'}]
      
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
      <ShowcaseGridItem images={element.images} colors={element.colors} header={element.header} price={element.price} type={element.type}/>)
  }
  
  render(){
    
    return(
      <React.Fragment>
      <div className={styles.imageSlider} style={{backgroundImage:`url(${this.state.imageslider[this.state.index]})`}}>
      <button className={styles.leftbtn} onClick={()=>this.setState({index:this.prevImgSlider()})}>
      <img src={leftbtn}/>
      </button>
      <button className={styles.rightbtn} onClick={()=>this.setState({index:this.nextImgSlider()})}>
      <img src={rightbtn}/>
      </button>
      <h1> {this.state.sliderheaders[this.state.index]} </h1>
      <p> {this.state.sliderdescription[this.state.index]} </p>
      <button className={styles.buynow}> Buy Now </button>
      </div>
      
      <h1 className={styles.headers}> Best Deals </h1>
      
      <div className={styles.showcase}>
      <ul>
      <li> <button onClick={() => this.setState({showcaseindex: 0})}> Hero Deals         </button> </li>
      <li> <button onClick={() => this.setState({showcaseindex: 1})}> Galaxt Z Series      </button> </li>
      <li> <button onClick={() => this.setState({showcaseindex: 2})}> Galaxt S Series              </button> </li>
      <li> <button onClick={() => this.setState({showcaseindex: 3})}> Galaxt A Series
      </button></li>
      <li> <button onClick={() => this.setState({showcaseindex: 4})}> Galaxt M Series         </button> </li>
      <li> <button onClick={() => this.setState({showcaseindex: 5})}> Galaxt F Series         </button> </li>
      </ul>
      
      <div className={styles.showcasegrid}>
      {this.insertShowcaseElements()}
      </div>
      </div>
    
      <h1 className={styles.headers}> Ultimate school bundles </h1>
      
      <Lowershowcase />
      
      <div  className={styles.conditions}> 
      <p> It's time for you to stock up on all your favourite Samsung products and unfold the right tools for your future. Samsung's Back to School sale features amazing discounts on laptops, tablets, and monitors. You can also earn discounts and offers by referring friends and family! Unleash your school spirit and grab great deals. </p>
      
      <p> Here are some amazing offers you don't want to miss:</p>
      <p> • Get up to 15%* off on Galaxy Book, Tab & Monitor</p>
      <p>• Get up to ₹ 20,000* cashback on ICICI, HDFC, SBI, and other leading banks</p>
      <p>• Get Welcome vouchers worth ₹ 5,000 on the Samsung Shop App </p>
      </div>
      
      <Footer/>
      </React.Fragment>
      )
  }
  
}