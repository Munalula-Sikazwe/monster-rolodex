import React from "react";
import './card-list.styles.css';
import CardComponent from "../card/card.component";

const cardListComponent = ({monsters}) => (
    <div className={"card-list"}>
        {monsters.map((monster) => (


                <CardComponent key={monster.id} monster={monster}/>
            ))}

    </div>)

export default cardListComponent;