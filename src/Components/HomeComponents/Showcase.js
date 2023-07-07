import React from "react"
import {useEffect, useState} from 'react';
import styles from "./Showcase.module.css"

import ultra from "./Extras/ultra.jpg"
import tv from "./Extras/tvBigger.jpg"
import book3 from "./Extras/book3.jpg"
import tabs8 from "./Extras/tabs8fast.webp"
import S22 from "./Extras/S22fast.jpg"
import Watch5 from "./Extras/Watch5fast.jpg"

import tvNeo from "./Extras/tvfast.jpg"
import tvLED from "./Extras/tvBigger.jpg"
import tvOLED from "./Extras/tvOLED.jpg"
import tvFrame from "./Extras/tvFrame.png"
import tvFreeplay from "./Extras/tvFreeplay.jpg"

import bespokewdc from "./Extras/bespokewdc.webp"
import bespokesbs from "./Extras/bespokesbs.jpg"
import ecobubble from "./Extras/ecobubble.jpg"
import ac5in1 from "./Extras/ac5in1.png"
import vaccume from "./Extras/vaccume.jpg"

export class Showcase extends React.Component{

constructor(){
super()

this.state={
mobileImage:ultra,
tvImage:tvNeo,
homeImage:bespokewdc
}

}

insertMobile(){
return(

<React.Fragment>
<h1 className={styles.header}> Mobile & Computing </h1>
<ul className={styles.mobileLinks}>
<li><button onClick = {() => this.setState({mobileImage: ultra})}> Galaxy S23 Ultra</button> </li>
<li><button onClick = {() => this.setState({mobileImage: book3})}> Galaxy Book3 Series</button> </li>
<li><button onClick = {() => this.setState({mobileImage: tabs8})}> Galaxy Tab S8 Series</button> </li>
<li><button onClick = {() => this.setState({mobileImage: S22})}> Galaxy S22</button> </li>
<li><button onClick = {() => this.setState({mobileImage: Watch5})}> Galaxy Watch 5</button> </li>
</ul>
</React.Fragment>
)
}

insertTV(){
return(

<React.Fragment>
<h1 className={styles.header}> TV & AV</h1>
<ul className={styles.tvLinks}>
<li><button onClick = {() => this.setState({tvImage: tvNeo})}> Neo QLED</button> </li>
<li><button onClick = {() => this.setState({tvImage: tvLED})}> QLED </button> </li>
<li><button onClick = {() => this.setState({tvImage: tvOLED})}> OLED </button> </li>
<li><button onClick = {() => this.setState({tvImage: tvFrame})}> The Frame </button> </li>
<li><button onClick = {() => this.setState({tvImage: tvFreeplay})}> The Freestyle </button> </li>
</ul>
</React.Fragment>
)
}

insertHomeApps(){
return(

<React.Fragment>
<h1 className={styles.header}> Home Appliances </h1>
<ul className={styles.mobileLinks}>
<li><button onClick = {() => this.setState({homeImage: bespokewdc})}> Bespoke Washer Dryer Combo</button> </li>
<li><button onClick = {() => this.setState({homeImage: bespokesbs})}>  BESPOKE Side by Side Refrigerator </button> </li>
<li><button onClick = {() => this.setState({homeImage: ac5in1})}>  Convertible 5in1 AC </button> </li>
<li><button onClick = {() => this.setState({homeImage: ecobubble})}>  Ecobubble Top Load </button> </li>
<li><button onClick = {() => this.setState({homeImage: vaccume})}>  Vacuum Cleaner </button> </li>
</ul>
</React.Fragment>
)
}

render(){
return(

<div className={styles.body}>

<ul>
<li> <div className={styles.mobile} style={{backgroundImage: `url(${this.state.mobileImage})`}}>
{this.insertMobile()}
</div> </li>
<li> <div className={styles.tv} style={{backgroundImage: `url(${this.state.tvImage})`}}>
{this.insertTV()}
</div>
</li>
<li> <div className={styles.homeApps} style={{backgroundImage: `url(${this.state.homeImage})`}}>
{this.insertHomeApps()}
 </div>
 </li>
</ul>

</div>

)
}

}