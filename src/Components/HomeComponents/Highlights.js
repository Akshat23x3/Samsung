import React from 'react'
import styles from "./Highlights.module.css"
import S23lime from './Extras/S23Lime.webp'
import tabs8 from './Extras/tabs8Highlights.jpg'
import homeApps from './Extras/homeapplianceshigh.jpg'
import tv from './Extras/tvhigh.jpg'
import laptop from './Extras/laptophigh.jpg'

export class Highlights extends React.Component{

constructor(){
super()
this.hover = false;
this.state = {
images: [tabs8, homeApps, tv, laptop]
}
}

renderHighlights(){
return this.state.images.map(
image => <div className={`${styles.grid_item}`} onMouseOver={() => this.OnHover()}>
<img src={image}/>
<button className={styles.booknowBtn} onClick={() => {
        const url = '/Samsung/Shop';
        window.open(url, '_blank');
      }}> Book Now </button>
</div>
)
}

OnHover(){

}

render(){
return(
<div className={styles.highlights}>
<header> This Week's Highlights </header>
<div className={styles.container}>
{() => {this.hover = true}}
<div className={`${styles.grid_item} ${styles.biggerHighlight}`} onMouseOver={() => this.OnHover()}>
<img src={S23lime} alt="S23Lime" />
<button className={styles.booknowBtn} onClick={() => {
        const url = '/Samsung/Shop';
        window.open(url, '_blank');
      }}> Book Now </button>
</div>
{this.renderHighlights()}
</div>
</div>
)}

}