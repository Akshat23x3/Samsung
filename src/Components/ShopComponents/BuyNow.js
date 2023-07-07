import React from "react"
import styles from "./BuyNow.module.css"

import {BuynowBtnComponent} from "./BuynowBtnComponent"
import {Footer} from "./Footer"

import image1 from "./Extras/lpis1.webp"
import leftbtn from "./Extras/leftbtn.png"
import rightbtn from "./Extras/rightbtn.png"



export class BuyNow extends React.Component{
  
  constructor(props){
    super(props)
    this.locationHook=props.myHookValue
    this.navigationHook=props.navhook
    
    this.state={
      exchange:false,
      device:new URLSearchParams(this.locationHook.search).get('name'),
      price:new URLSearchParams(this.locationHook.search).get('price'),
      deviceType:new URLSearchParams(this.locationHook.search).get('type'),
      images:new URLSearchParams(this.locationHook.search).get('images').split(','),
      specs:[new URLSearchParams(this.locationHook.search).get('spec1').split(','),
        new URLSearchParams(this.locationHook.search).get('spec2').split(',')
      ],
      colors:new URLSearchParams(this.locationHook.search).get('colors').split(","),
      deliveryAddress:"",
      samsungCare:[{name:"Accidental Liquid Damage Protection", price:7999},
      {name:"Screen Protection", price:6999}, {name:"Comprehensive Protection(2 Years)", price:5999},
      {name:"Extended Warranty(1 Year)", price:6999}, {name:"None", price:0}],
      offers:[{name:"Instant Bank Discount", price:-8000},
      {name:"Save Up To 18%", price:-0.18},
      {name:"PAYTM Offer", price:-2500}],
      exchanges:[{header:"Yes Please", name:"Exchange upto ", price:-10000}, {header:"No Thanks", name:"", price:0}],
      careplusIndex:0,
      offerIndex:0,
      exchangeIndex:-1,
      colorIndex: 0,
      storageindex:0,
      
      imageslider:[image1],
      sliderheaders:["Big TV Days"],
      sliderdescription:["Avail benifits upto Rs. 10000"],
      index:0,
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
  
  colorChange(stateIndex, index){
      if (stateIndex == index){
        return "white"
      }
      return "black"
    }
    
    fontColorChange(stateIndex, index){
      if (stateIndex == index){
        return "black"
      }
      return "white"
    }
    
  storagebtnclick(index){
    this.setState({storageindex: index}, console.log(this.state.specs[this.state.storageindex][2]))
    this.setState({price: this.state.specs[index][2]})
  }

  isSpecifications(){
      return(
        <React.Fragment>
        <div className={styles.configuration}>
        <h1 className={styles.header}> Specifications </h1>
        <div className={styles.list_config}>
        {this.state.specs.map((element, index) => 
        <button className={styles.gridItem} onClick={() => this.storagebtnclick(index)} 
        style={{backgroundColor: this.colorChange(this.state.storageindex, index), color:this.fontColorChange(this.state.storageindex, index)}}>
        <p> {element[0]} | {element[1]} </p>
        <p> Rs. {element[2]} </p>
        </button>
        )}
        </div>
        </div>
        </React.Fragment>
        )
  }
  
  renderColorBtn(){
    return (
      
      this.state.colors.map((color, index) => 
      <button className={`${styles.gridItem} ${styles.colorBtn}`}
      style={{backgroundColor:color}} onClick={() => this.setState({colorIndex: index})}>
      </button>
      )
      
      )
  }
  
  renderSamsungCareList(){
    return(
      this.state.samsungCare.map((element, index) => 
      <button className={styles.gridItem} onClick={() => this.setState({careplusIndex: index})} style={{backgroundColor: this.colorChange(this.state.careplusIndex, index), color:this.fontColorChange(this.state.careplusIndex, index)}}>
      <p> {element.name} </p>
      <p> {element.price} </p>
      </button>
      )
      
      )
  }
  
  renderOffersList(){
    return(
      this.state.offers.map((element, index) => 
      <button className={styles.gridItem} onClick={() => this.setState({offerIndex: index})} style={{backgroundColor: this.colorChange(this.state.offerIndex, index), color:this.fontColorChange(this.state.offerIndex, index)}}>
      <p> {element.name} </p>
      <p> {element.price} </p>
      </button>
      )
      )
  }
  
  renderExchangeList(){
      return(
      this.state.exchanges.map((exchange, index) => 
      <button className={styles.gridItem} onClick={() => this.setState({exchangeIndex: index})} style={{backgroundColor: this.colorChange(this.state.exchangeIndex, index), color:this.fontColorChange(this.state.exchangeIndex, index)}}>
      <p> {exchange.header} </p>
      <p> {exchange.name} Rs.{exchange.price}* </p>
      </button>
      )
      )
  }
  
  renderOffers(columnIndex, array){
    if (columnIndex > -1){
      return (
        <React.Fragment>
        <p> {array[columnIndex].name} </p>
        <p className={styles.priceConfig}> Rs. {array[columnIndex].price} </p>
        </React.Fragment>
        )
    }
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
      </div>
      
      <div className={styles.configurations}>
      
      <div className={styles.configuration}>
      <h1 className={styles.header}> Exchange </h1>
      <div className={styles.list_config}>
      {this.renderExchangeList()}
      </div>
      </div>
      
      <div className={styles.configuration}>
      <h1 className={styles.header}> Device </h1>
      <div className={styles.list_config}>
      <button className={styles.gridItem} style={{backgroundColor: this.colorChange(0, 0), color:this.fontColorChange(0, 0)}}>
      <p> {this.state.device} </p>
      </button>
      </div>
      </div>
      
      {this.isSpecifications()}
      
      <div className={ `${ styles.colorComponent }`}>
      <h1 className={styles.header}> Color </h1>
      <div>
      <img className={styles.colorImg} src={this.state.images[this.state.colorIndex]} />
      {this.renderColorBtn()}
      </div>
      </div>
      
      <div className={styles.configuration}>
      <h1 className={styles.header}> Delivery Details </h1>
      <div className={styles.list_config}>
      <textarea className={styles.deliveryDetails} onChange={(event) => this.setState({deliveryDetails: event.target.value})}/>
      </div>
      </div>
      
      <div className={styles.configuration}>
      <h1 className={styles.header}> Offers </h1>
      <div className={styles.list_config}>
      {this.renderOffersList()}
      </div>
      </div>
      
      <div className={styles.configuration}>
      <h1 className={styles.header}> Samsung Care+ </h1>
      <div className={styles.list_config}>
      {this.renderSamsungCareList()}
      </div>
      </div>
      
      <div className={styles.configuration}>
      <div className={styles.boxImage}>
      <p> What's in the box* </p>
      </div>
      <div className={styles.sumup}>
      <h1> {this.state.device} </h1>
      <div className={styles.deviceConfig}>
      <p> {this.state.specs[this.state.storageindex][0]} | {this.state.specs[this.state.storageindex][1]} | {this.state.colors[this.state.colorIndex].toUpperCase()} </p>
      <p className={styles.priceConfig}> Rs.{this.state.price} </p>
      </div>
      
      <div className={styles.deviceConfig}>
      {this.renderOffers(this.state.exchangeIndex, this.state.exchanges)}
      </div>
      
      <div className={styles.deviceConfig}>
      {this.renderOffers(this.state.offerIndex, this.state.offers)}
      </div>
      
      <div className={styles.deviceConfig}>
      {this.renderOffers(this.state.careplusIndex, this.state.samsungCare)}
      </div>
      
      <button className={styles.continueBtn} onClick={() => this.navigationHook(`/Samsung/Checkout?color=${this.state.colors[this.state.colorIndex]}&name=${this.state.device}&price=${this.state.price}&spec=${this.state.specs[this.state.storageindex]}&image=${this.state.images[this.state.colorIndex]}&exchange=${this.state.exchangeIndex}&offer=${this.state.offers[this.state.offerIndex].name},${this.state.offers[this.state.offerIndex].price}&careplus=${this.state.samsungCare[this.state.careplusIndex].name},${this.state.samsungCare[this.state.careplusIndex].price}&delivery=${this.state.deliveryDetails}`)
      }> Continue </button>
      
      </div>
      </div>
      </div>
      
      
      
      </React.Fragment>
      )
  }
  
}