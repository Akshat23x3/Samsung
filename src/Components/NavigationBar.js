import React from 'react'
import styles from "./NavigationBar.module.css"
import logo from "./Extras/logo.png"
import {useNavigate} from "react-router-dom"

export const NavigationBar = () =>{
const history = useNavigate()

return(
<nav className="navigationBar">
<a href="/Samsung" onClick={history("/Samsung")}>
 <img className={styles.companyLogo} src={logo} alt="Company Logo" />
 </a>
<ul>
<li> <a href="/Shop" onClick={history("/Shop")}> Shop </a> </li>
<li> <a href="/Mobile" onClick={history("/Mobile")}> Mobile </a> </li>
<li> <a href="/TVAAV" onClick={history("/TVAAV")}> TV & AV </a> </li>
<li> <a href="/HomeAppliances" onClick={history("/HomeAppliances")}> Home Appliances </a> </li>
<li> <a href="/Laptops" onClick={history("/Laptops")}> Laptops </a> </li>
<li> <a href="/Displays" onClick={history("/Displays")}> Displays </a> </li>
</ul>
</nav>

)
}