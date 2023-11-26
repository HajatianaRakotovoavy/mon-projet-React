import React from 'react';

const Lists = props => {
const namelist =props.namelist;
const data = namelist.map(data => {
    // return data.sexe === 'Feminin' ?(
        return(
        <div className="testcompo" key={data.id}>
            <div>Nom: {data.name}</div>
            <div>Age: {data.age}</div>
            <div>sexe: {data.sexe}</div>
        
        </div>
        )

    // ) : null;
});
return <div className="name-list">{data}</div>

};

export default Lists;