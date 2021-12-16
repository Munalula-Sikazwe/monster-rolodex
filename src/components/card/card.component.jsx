import React from "react";
import './card.styles.css'
const cardComponent = ({monster})=>(
    <div className={"card-container"}>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={"monster-images"}/>
        <h5>{monster.name}</h5>
        <p>{monster.email}</p>
    </div>
)
export default cardComponent;