import React from 'react'
import styles from "./NavigationBar.module.css"
import logo from "./Extras/logo.png"

export const NavigationBar = () =>{


return(
<nav className="navigationBar">
<a href="/Samsung">
 <img className={styles.companyLogo} src={logo} alt="Company Logo" />
 </a>
<ul>
<li> <a href="/Samsung/Shop"> Shop </a> </li>
<li> <a href="/Samsung/Mobile"> Mobile </a> </li>
<li> <a href="/Samsung/TVAAV"> TV & AV </a> </li>
<li> <a href="/Samsung/HomeAppliances"> Home Appliances </a> </li>
<li> <a href="/Samsung/Laptops"> Laptops </a> </li>
<li> <a href="/Samsung/Displays"> Displays </a> </li>
</ul>
</nav>

)
}