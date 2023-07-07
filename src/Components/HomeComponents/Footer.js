import React from "react"
import styles from "./Footer.module.css"

export const Footer = () =>{

return(
<div className={styles.footer}>
<div className={styles.upper}>
<p>
Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.
</p>

<p>
Please dispose of e-waste and plastic waste responsibly.
For more information or e-waste pick up, please call 1800 5 7267864 or click here for more details.
</p>

<p>
Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001
Corporate Identification Number (CIN): U31900DL1995PTC071387
</p>
</div>

<div className={styles.lower}>
<p> India/English </p>
<ul>
<li> <button> Privacy </button> </li>
<li> <button> Legal </button> </li>
<li> <button> CSR Policy </button> </li>
</ul>
</div>
</div>
)

}