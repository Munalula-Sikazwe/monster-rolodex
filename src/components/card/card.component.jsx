import React from "react";
import './card.styles.css'
const cardComponent = ({monster})=>(
    <div className={"card-container"}>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=80x80`} alt={"monster-images"}/>
        {monster.name}
        <h1>{monster.email}</h1>
    </div>
)
export default cardComponent;