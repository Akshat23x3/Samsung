import React from 'react'
import {ImageSlider} from "./HomeComponents/ImageSlider"
import {Highlights} from "./HomeComponents/Highlights"
import {Showcase} from "./HomeComponents/Showcase"
import {Explore} from "./HomeComponents/Explore"
import {Footer} from "./HomeComponents/Footer"

export const Home = () => {


return(

<React.Fragment>
<ImageSlider />
<Highlights />
<Showcase />
<Explore />
<Footer />
</React.Fragment>

)

}