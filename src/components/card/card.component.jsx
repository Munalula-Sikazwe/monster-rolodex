import React from "react";
import './card.styles.css'
const cardComponent = ({monster})=>(
    <div className={"card-container"}>
        <img src={`https://robohash.org/${monster.id}?set=set2`}/>
        {monster.name}
    </div>
)
export default cardComponent;