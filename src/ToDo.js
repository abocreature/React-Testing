import React, { useState } from 'react';
import Table from './Table';

function Child(props) {
    return (
        <input type="checkbox" onClick={props.cycleVal} />
    );
}

function Row(props) {
    const [cross, setCross] = useState(false);

    const cycle = () => setCross(!cross);
    
    if(props.cross === true) {
        return (
            <li>
                <Child cycleVal={cycle}/> 
                <del>{props.row.value}</del>
            </li>
        );
    }
    else 
    {
        return (
            <li>
                <Child cycleVal={cycle}/> 
                {props.row.value}
            </li>
        );
    }
}

function ToDo(props) {
    const style = {
        width: "50%",
        margin: "30px auto"
    };

    const allRows = props.body.map(
        (row) => <Row key={row.id} row={row}/>
    );

    return (
        <ul>
            {allRows}
        </ul>
    );
}

export default ToDo;