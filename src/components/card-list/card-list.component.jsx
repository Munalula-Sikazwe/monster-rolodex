import React from "react";
import './card-list.styles.css';
import CardComponent from "../card/card.component";
const cardListComponent = ({monsters}) => (
    <div className={"card-list"}>
        {monsters.map((element) => (
            <h1 key={element.id}>
                <CardComponent monster={element}/>
            </h1>))}

    </div>)

export default cardListComponent;