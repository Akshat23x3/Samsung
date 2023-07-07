import React from "react"
import styles from "./Components.module.css"

import {ShowcaseGridItem} from "./ShowcaseGI"
import {Lowershowcase} from "./LowerShowcase"
import {Footer} from "./ShopComponents/Footer"

import image1 from "./ShopComponents/Extras/wmis1.webp"
import image2 from "./ShopComponents/Extras/wmis2.webp"
import image3 from "./ShopComponents/Extras/wmis3.webp"
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


export class HomeAppliances extends React.Component{
  constructor(props){
    super(props)
    
    this.navigationHook = props.navhook
    this.state={
      index:0,
      imageslider:[image1, image2, image3],
      sliderheaders:["BESPOKE Washer Dryer",
      "8.0 kg Ecobubble™ Front Load",
      "6.5 kg Ecobubble™ Front Load"],
      sliderdescription:["Avail benifits upto Rs. 10000",
      "Avail benifits upto Rs. 22000",
      "Avail benifits upto Rs. 17000"],
      showcaseindex:0,
      ssElements:[
        
        [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], type:'tablet', spec1:["128GB", "8GB", 74990], spec2:["256GB", "12GB", 104990]}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], type:'tablet', spec1:["128GB", "8GB", 58990], spec2:["256GB", "12GB", 88990]},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'Galaxy Tab S6 Lite (Wi-Fi, 4GB)', colors:["grey","blue", "pink"], type:'tablet', spec1:["128GB", "8GB", 31999], spec2:["256GB", "12GB", 34999]}, 
      {images: [showcaseimage6], header:"Galaxy Tab S8 Ultra (Wi-Fi)", colors:["grey"], type:'tablet', spec1:["128GB", "8GB", 99999], spec2:["256GB", "12GB", 129999]},
      {images: [showcaseimage7_1, showcaseimage7_2, showcaseimage7_3, showcaseimage7_4],
      header:'Galaxy Tab S7 FE (Wi-Fi, 4GB RAM)', colors:['black', 'green', 'light black', 'pink'], type:'tablet', spec1:["128GB", "8GB", 34999], spec2:["256GB", "12GB", 64999]}, 
      {images: [showcaseimage8], header:'Galaxy Book3 Pro, 35.56cm (14"), i7, 16GB, Intel Xe Graphics', colors:['grey'], price:143990, type:'tablet', spec1:["128GB", "8GB", 143990], spec2:["256GB", "12GB", 173990]}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], type:'tablet', spec1:["128GB", "8GB", 74990], spec2:["256GB", "12GB", 104990]}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], type:'tablet', spec1:["128GB", "8GB", 58990], spec2:["256GB", "12GB", 88990]}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], type:'tablet', spec1:["128GB", "8GB", 74990], spec2:["256GB", "12GB", 104990]}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], type:'tablet', spec1:["128GB", "8GB", 58990], spec2:["256GB", "12GB", 88990]},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], type:'tablet', spec1:["128GB", "8GB", 74990], spec2:["256GB", "12GB", 104990]}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], type:'tablet', spec1:["128GB", "8GB", 58990], spec2:["256GB", "12GB", 88990]},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]}],
      
       [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], type:'tablet', spec1:["128GB", "8GB", 74990], spec2:["256GB", "12GB", 104990]}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], type:'tablet', spec1:["128GB", "8GB", 58990], spec2:["256GB", "12GB", 88990]},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'Galaxy Tab S6 Lite (Wi-Fi, 4GB)', colors:["grey","blue", "pink"], type:'tablet', spec1:["128GB", "8GB", 31999], spec2:["256GB", "12GB", 34999]}],
      
      [{images:[showcaseimage1], header:'Galaxy Book3, 39.62cm (15.6"), i5, 8GB, Intel Xe Graphics', colors:["light black"], type:'tablet', spec1:["128GB", "8GB", 74990], spec2:["256GB", "12GB", 104990]}, 
      {images: [showcaseimage2, showcaseimage2_2, showcaseimage2_3], header:'Galaxy Tab S8 (Wi-Fi)', colors:["pink", "black", "grey"], type:'tablet', spec1:["128GB", "8GB", 58990], spec2:["256GB", "12GB", 88990]},
      {images: [showcaseimage3], header:'86.8cm (34") G8 OLED Gaming Monitor with 0.1ms response', colors:['grey'], price:109399, type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]},
      {images: [showcaseimage4], header:'80.0cm (32") Gaming Monitor with WQHD resolution, 240Hz refresh rate', colors:['grey'], type:'tv', spec1:["34''", "FHD", 109399], spec2:["45''", "QHD", 139399]}, 
      {images: [showcaseimage5, showcaseimage5, showcaseimage5], header: 'Galaxy Tab S6 Lite (Wi-Fi, 4GB)', colors:["grey","blue", "pink"], type:'tablet', spec1:["128GB", "8GB", 31999], spec2:["256GB", "12GB", 34999]}, 
      {images: [showcaseimage6], header:"Galaxy Tab S8 Ultra (Wi-Fi)", colors:["grey"], type:'tablet', spec1:["128GB", "8GB", 99999], spec2:["256GB", "12GB", 129999]},
      {images: [showcaseimage7_1, showcaseimage7_2, showcaseimage7_3, showcaseimage7_4],
      header:'Galaxy Tab S7 FE (Wi-Fi, 4GB RAM)', colors:['black', 'green', 'light black', 'pink'], type:'tablet', spec1:["128GB", "8GB", 34999], spec2:["256GB", "12GB", 64999]}, 
      {images: [showcaseimage8], header:'Galaxy Book3 Pro, 35.56cm (14"), i7, 16GB, Intel Xe Graphics', colors:['grey'], price:143990, type:'tablet', spec1:["128GB", "8GB", 143990], spec2:["256GB", "12GB", 173990]}]
      
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
      <ShowcaseGridItem navhook={this.navigationHook} images={element.images} colors={element.colors} header={element.header}  price={element.spec1[2]} type={element.type} spec1={element.spec1} spec2={element.spec2}/>)
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
      
      <Lowershowcase navhook={this.navigationHook}/>
      
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