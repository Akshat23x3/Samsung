import React from "react"
import styles from "./Components.module.css"


export class ShowcaseGridItem extends React.Component{
  
  constructor(props){
    super(props)
    
    this.state={
      images:props.images,
      colors:props.colors,
      header:props.header,
      price:props.price,
      deviceType:props.type,
      spec1:props.spec1,
      spec2:props.spec2,
      index:0
    }
  }
  
  insertButton(){
    return this.state.colors.map((color, colorIndex) => <button className={styles.colorbtn} style={{background:color}} onClick={() => this.setState({index : colorIndex})} />)
  }
  
  render(){
    
    return(
      <div className={styles.griditem}>
      <img src={this.state.images[this.state.index]} />
      <h1> {this.state.header} </h1>
      {this.insertButton()}
      <p> Rs. {this.state.price}.00</p>
      <button className={styles.buynow} onClick={() => {
        const url = '/Samsung/BuyNow?';
        window.open(url+`colors=${this.state.colors}&name=${this.state.header}&price=${this.state.price}&type=${this.state.deviceType}&images=${this.state.images}&spec1=${this.state.spec1}&spec2=${this.state.spec2}`, '_blank');
      }}> Buy Now </button>
      </div>
      )
  }
}