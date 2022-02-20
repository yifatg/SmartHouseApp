import React, {useState} from 'react'
import './showrooms.css';
import {Link} from 'react-router-dom';

export default function ShowRooms(props) {

    return (
        
        <div className="room" style={{backgroundColor:props.color}}>
            {/* onClick={props.class1()} */}
               <Link to={`/room${props.name}`} style={{ textDecoration: "none", color:"white"}} onClick={() => props.class1()}>{props.name}</Link>   
             {/* {props.name}   */}
        </div>
    )
}
