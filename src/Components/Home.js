import React from 'react'
import {ImageSlider} from "./HomeComponents/ImageSlider"
import {Highlights} from "./HomeComponents/Highlights"
import {Showcase} from "./HomeComponents/Showcase"
import {Explore} from "./HomeComponents/Explore"
import {Footer} from "./HomeComponents/Footer"

export const Home = (props) => {


return(

<React.Fragment>
<ImageSlider />
<Highlights navhook={props.navhook}/>
<Showcase />
<Explore />
<Footer />
</React.Fragment>

)

}