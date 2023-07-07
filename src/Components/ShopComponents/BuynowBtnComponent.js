import React from "react"
import styles from "./BuyNow.module.css"

export class BuynowBtnComponent extends React.Component{
  
  constructor(props){
    super(props)
    
    this.state ={
      isClicked:false,
      header:props.header,
      desc: props.desc,
      backgroundColor: "black",
      color: "white"
    }
  }
  
  Clicked() {
    this.setState({
      isClicked: !this.state.isClicked
    }, console.log(this.state.isClicked))
    
    if (this.state.isClicked==true){
      this.setState({backgroundColor: "white", color: "black"})
    }
    else {
      this.setState({backgroundColor: "black", color: "white"})
    }
  }
  
  render(){
    return(
      <React.Fragment>
      <button className={styles.gridItem} style={{backgroundColor:this.state.backgroundColor, color: this.state.color}} onClick={() => this.Clicked()}> 
      <p> {this.state.header} </p>
      <p> {this.state.desc} </p>
      </button>
      </React.Fragment>
      )
  }
  
}