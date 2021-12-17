import React from 'react';
import './search-box.styles.css';

const searchBoxComponent = ({handleChange,placeholder}) => (

    <input className={'search'} type={'search'} placeholder={placeholder} onChange={handleChange}/>

)

export default searchBoxComponent;