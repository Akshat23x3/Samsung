import React from "react"
import styles from "./Checkout.module.css"

export class Checkout extends React.Component{
  constructor(props){
    super(props)
    this.locationHook=props.myHookValue
    this.exchange = new URLSearchParams(this.locationHook.search).get('exchange');
    this.offer = new URLSearchParams(this.locationHook.search).get('offer').split(",");
    this.samsungCare = new URLSearchParams(this.locationHook.search).get('careplus').split(",");
    this.colors = new URLSearchParams(this.locationHook.search).get('color');
    this.device = new URLSearchParams(this.locationHook.search).get('name')
    this.spec = new URLSearchParams(this.locationHook.search).get('spec').split(",");
    this.deliveryDetails = new URLSearchParams(this.locationHook.search).get('delivery');
    this.price = parseInt(new URLSearchParams(this.locationHook.search).get('price'));
  }
  
  isExchange(){
    if(this.exchange == 0){
      return(
        <div className={styles.config}>
        <h1> EXCHANGE </h1>
        <li> Upto </li>
        <li className={styles.price}> Rs. -10000 </li>
        </div>
        )
    }
  }
  
  isOffer(){
    if(this.offer != "-1"){
      if (parseFloat(this.offer[1]) > -1 && parseFloat(this.offer[1]) < 0){
        this.offer[1] = parseInt(parseFloat(this.offer[1]) * this.price)
      }
      this.offer[1] = parseInt(this.offer[1])
      return(
        <div className={styles.config}>
        <h1> OFFER </h1>
        <li> {this.offer[0]} </li>
        <li className={styles.price}> Rs. {this.offer[1]} </li>
        </div>
        )
    }
  }
  
  isSamsungCare(){
      this.samsungCare[1] = parseInt(this.samsungCare[1])
      return(
        <div className={styles.config}>
        <h1> SAMSUNG CARE+ </h1>
        <li> {this.samsungCare[0]} </li>
        <li className={styles.price}> Rs. {this.samsungCare[1]} </li>
        </div>
        )
  }
  
  devicedetails(){
    return(
        <div className={styles.config}>
        <h1> Device </h1>
        <li> {this.device} </li>
        <li> {`${this.spec[0]} | ${this.spec[1]}`} </li>
        <li className={styles.price}> Rs. {this.spec[2]} </li>
        </div>
        )
  }
  
  totalup(){
    var totalCost = 0
    totalCost = this.price + this.samsungCare[1] + this.offer[1]
    if(this.exchange == 0){
      totalCost -= 10000
    }
    
    return totalCost
  }
  
  totalDiscount(){
    let discount = this.offer[1]
    if (this.exchange == 0){
      discount -= 10000
    }
    return discount
  }
  
  additionalCost(){
    if (this.samsungCare[1] != 0){
      return(
        <React.Fragment>
      <p style={{marginTop:"1rem"}}> Additional Cost </p>
      <p className={styles.price} style={{borderBottom:"1px solid grey"}}> Rs. {this.samsungCare[1]} </p>
        </React.Fragment>
        )
    }
  }
  
  render(){
    return(
    <React.Fragment>
    <div className={styles.container}>
    
    <img className={styles.deviceImg} src={new URLSearchParams(this.locationHook.search).get('image')}/>
    <div className={styles.deviceConfig}>
    <ul>
    {this.devicedetails()}
    {this.isExchange()}
    {this.isOffer()}
    {this.isSamsungCare()}
    <div className={styles.config}>
        <h1> Shipping Details </h1>
        <li> {this.deliveryDetails} </li>
        </div>
    </ul>
    </div>
    
    <div className={styles.total}>
    <h1 style={{borderBottom:"3px solid grey"}}> TOTAL COST </h1>
    <h1 className={styles.price} style={{fontSize:"24px"}}> Rs. {this.totalup() + parseInt(0.18 * this.totalup())} </h1>
    <p className={styles.pricebreak}> Price Breakdown </p> 
    <p style={{marginTop:"1rem"}}> Offers</p>
    <p className={styles.price} style={{borderBottom:"1px solid grey"}}> Rs. {this.totalDiscount()}</p>
    {this.additionalCost()}
    <p style={{marginTop:"1rem"}}> Tax (including GST. 18%)</p>
    <p className={styles.price} style={{borderBottom:"1px solid grey"}}> Rs. {parseInt(0.18 * this.totalup())}</p>
    <button className={styles.paynow} onClick={() => alert("Kindly PAY!!(End of the Project!!)")}> Pay Now </button> 
    </div>
    
    </div>
    </React.Fragment>
    )

  }
}
  