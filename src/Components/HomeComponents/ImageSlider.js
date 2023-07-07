import React from "react"
import styles from "./ImageSlider.module.css"
import S23Open from "./Extras/S23Open.png"
import TabletOpen from "./Extras/TabletOpen.png"
import TvOpen from "./Extras/TvOpen.png"
import galaxyBookOpen from "./Extras/galaxyBookOpen.jpg"
import leftbtn from "./Extras/leftbtn.png"
import rightbtn from "./Extras/rightbtn.png"

export class ImageSlider extends React.Component{

constructor(){
super()

this.state={
highlightProducts:[S23Open, TabletOpen, TvOpen, galaxyBookOpen],
descriptions: [
"Meet the new Galaxy S23 Ultra, designed with the planet in mind and equipped with a built-in S Pen, Nightography camera and powerful chip for epic gaming.",
"Prebookings are now Open",
"Be the first to experience a Super Size TV",
"Ready to present your report!!"
],
image: S23Open,
headers:["Introducing S23 Ultra", "Galaxy Tab S8", "Unveiling 98'' QLED UHD TV", "Presenting Galaxy Books"],
description:"Meet the new Galaxy S23 Ultra, designed with the planet in mind and equipped with a built-in S Pen, Nightography camera and powerful chip for epic gaming.",
header:"Introducing S23 Ultra"
}

this.imgIndex = 0;
this.timeout = 0
}

slidingImage(){
return(
<img className={styles.images} src={this.state.image}/>
)
}

slidingDescription(){
return(
<section className={styles.productDescription}>
<h1 className={styles.productHeader}> {this.state.headers[this.imgIndex]} </h1>
<p> {this.state.descriptions[this.imgIndex]} </p>
</section>
)
}

prevImage(){
if (this.imgIndex > 0){
this.imgIndex -= 1
this.setState({image: this.state.highlightProducts[this.imgIndex]})
}
}

nextImage(){
if (this.imgIndex < this.state.highlightProducts.length - 1){
this.imgIndex += 1
this.setState({image: this.state.highlightProducts[this.imgIndex]})
}
}


intervalUpdate(){
if (this.imgIndex < 3){
this.nextImage()
}

else if (this.imgIndex == 3){
this.imgIndex = -1
this.nextImage()
}

setTimeout(this.intervalUpdate, 5000);
}


render(){

return(
<div className={styles.slider}>
<button class={styles.slider_btn} onClick={() => this.prevImage()}>
<img className={styles.slider_btn_image} src={leftbtn} alt={String(leftbtn)} />
</button>

{this.slidingImage()}
{this.slidingDescription()}
<button class={styles.slider_btn} onClick={() => this.nextImage()}>
<img className={styles.slider_btn_image} src={rightbtn} alt={String(rightbtn)} />
</button>
</div>

)
}



}