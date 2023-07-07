import React from 'react'
import styles from "./NavigationBar.module.css"
import logo from "./Extras/logo.png"
import {useNavigate} from "react-router-dom"

export const NavigationBar = () =>{
const history = useNavigate()

return(
<nav className="navigationBar">
<a onClick={() => history("/Samsung")}>
 <img className={styles.companyLogo} src={logo} alt="Company Logo" />
 </a>
<ul>
<li> <a onClick={() => history("/Samsung/Shop")}> Shop </a> </li>
<li> <a onClick={() => history("/Samsung/Mobile")}> Mobile </a> </li>
<li> <a onClick={() => history("/Samsung/TVAAV")}> TV & AV </a> </li>
<li> <a onClick={() => history("/Samsung/HomeAppliances")}> Home Appliances </a> </li>
<li> <a onClick={() => history("/Samsung/Laptops")}> Laptops </a> </li>
<li> <a onClick={() => history("/Samsung/Displays")}> Displays </a> </li>
</ul>
</nav>

)
}