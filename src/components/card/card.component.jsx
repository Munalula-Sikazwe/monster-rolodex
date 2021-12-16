import React from "react";
import './card.styles.css'
const cardComponent = ({monster})=>(
    <div className={"card-container"}>
        {monster.name}
    </div>
)
export default cardComponent;