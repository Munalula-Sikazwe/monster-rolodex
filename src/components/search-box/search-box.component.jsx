import React from 'react';

const searchBoxComponent = ({onChange})=>(
    <div>
        <input type={'search'} placeholder={'Search Monsters'} onChange={onChange}/>
    </div>
)

export default searchBoxComponent;