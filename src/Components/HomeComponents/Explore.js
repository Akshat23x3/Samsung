import React from 'react'
import styles from "./Explore.module.css"

import biglife from "./Extras/biglife.webp"
import feelfree from "./Extras/feelfree.webp"
import t3tips from "./Extras/3tips.jpg"
import Gnusmas from "./Extras/Gnusmas.webp"
import tomorrow from "./Extras/tomorrow.jpg"

export class Explore extends React.Component{

constructor(){
super()

this.state={
explore:[
[biglife, "Tips for Navigating Big Life Changes"],
[feelfree, "Feel Free to Lifestyle"],
[t3tips, "3 Hosting Tips to Alleviate Holiday Stress"],
[Gnusmas, "Meet G·NUSMAS, the curious extraterrestrial"],
[tomorrow, "Solve for Tomorrow"]
],
index:0
}

}

render(){

return(
<React.Fragment>
<h1 className={styles.header}> Explore #DoWhatYouCant </h1>
<div className={styles.exploreContainer}>
<img className={styles.image} src={this.state.explore[this.state.index][0]}/>
<div className={styles.querryButtons}>
<ol>
<li> <h1 onMouseOver={() => this.setState({index: 0}) } > {this.state.explore[0][1]} </h1> </li>
<li> <h1 onMouseOver={() => this.setState({index: 1}) } > {this.state.explore[1][1]}</h1> </li>
<li> <h1 onMouseOver={() => this.setState({index: 2}) } > {this.state.explore[2][1]} </h1> </li>
<li> <h1 onMouseOver={() => this.setState({index: 3}) } > {this.state.explore[3][1]} </h1> </li>
<li> <h1 onMouseOver={() => this.setState({index: 4}) } > {this.state.explore[4][1]} </h1> </li>
</ol>
</div>
</div>
</React.Fragment>

)

}
}