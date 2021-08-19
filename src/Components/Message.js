import React from 'react';
import './Messagestyle.css';


const Mymessage = (props) => {
    return (
        <h3 className="title">User: {props.author} </h3>
    )
};

export default Mymessage;