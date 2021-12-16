import React from "react";
import './card-list.styles.css';
import CardComponent from "../card/card.component";

const cardListComponent = ({monsters}) => (
    <div className={"card-list"}>
        {monsters.map((monster) => (
            <h1 key={monster.id}>

                <CardComponent monster={monster}/>
            </h1>))}

    </div>)

export default cardListComponent;