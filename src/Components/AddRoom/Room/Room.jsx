import React, {useState} from 'react'
import './room.css';
import {Link} from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct.jsx';

export default function Room(props) {
    return (
        <div>
            <div className="space"></div>
           <h2>{props.name} :שם החדר</h2> 
           <h3>סוג החדר: {props.type1}</h3>
           <button onClick={() =>{
               props.updateShowAddP(true);
               debugger;
               props.updateShowProducts(false);
           }}>הוסף מוצר</button> 
        </div>
    )
}
