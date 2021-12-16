import React from "react";
import './card-list.styles.css';
import CardComponent from "../card/card.component";
const cardListComponent = ({monsters}) => (
    <div className={"card-list"}>
        {monsters.map((monster) => (
            <h1 >
                <CardComponent key={monster.id} monster={monster}/>
            </h1>))}

    </div>)

export default cardListComponent;