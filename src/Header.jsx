import React from 'react';
import './index.css';


function Header(props) {
    return (
        <div >
            <h1 className ='headerTitle'>React Counters</h1>
            <div className = 'buttons'>
            <button onClick={props.add}>+</button>
            <button onClick = {props.minus}>-</button>
            </div>
        </div>
    )
}

export default Header;