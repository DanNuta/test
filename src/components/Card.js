//style 
import style from "../css/Card.module.scss";
import { projectFirestore } from "../firebase/config";
import { useState } from "react";


const Card = (props) => {

    return ( 
        <div className={style.card}>
            <h3 >{props.item.nume}</h3>
            <p>{props.item.antrenor}</p>
        </div>
     );
}
 
export default Card;