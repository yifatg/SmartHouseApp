import React, {useState} from 'react'
import './addproduct.css';
import {Link} from 'react-router-dom';

export default function AddProduct(props) {
    const [product, setProduct] = useState("");
    const checkAddProduct = () =>{
        let flag = true;
        if(product == "דוד" && props.roomType != "אמבטיה/שירותים")
            flag = false;
        if(props.productsArr.length >= 5)
            flag = false;
        if(product == "מערכת סטריאו" && props.productsArr.some(e => e.nameP ==="מערכת סטריאו"))
            flag = false;
        if(!flag){
            alert("error");
            props.updateShowAddP(false);
            props.updateShowProducts(true);
        }
        else{
            props.addP(product, props.roomName);
            props.updateShowAddP(false);
            props.updateShowProducts(true);
            }
    }

    return (
        <div className={props.class1}>
           <select name="" id="roomType" placeholder="סוג החדר" onChange = {(e) =>{
                //debugger; 
                const val = e.target[e.target.selectedIndex].value;
                setProduct(val);
                }}>
                <option value="בחר">
                 בחר
                </option>
                <option value="מזגן">
               מזגן
                </option>
                <option value="דוד">
               דוד 
                </option>
                <option value="מערכת סטריאו"> 
                מערכת סטריאו
                </option>
                <option value="מנורה"> 
                מנורה
                </option>
            </select>
            <button onClick={checkAddProduct}>הוסף</button> 
        </div>
    )
}
