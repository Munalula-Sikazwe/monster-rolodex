import React from "react";
import './card-list.styles.css';

const cardListComponent = ({monsters}) => (
    <div className={"card-list"}>
        {monsters.map((element) => <h1 key={element.id}> {element.name}</h1>)}

    </div>)

export default cardListComponent;