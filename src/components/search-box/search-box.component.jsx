import React from 'react';
import './search-box.styles.css';

const searchBoxComponent = ({onChange}) => (

    <input className={'search'} type={'search'} placeholder={'Search Monsters'} onChange={onChange}/>

)

export default searchBoxComponent;