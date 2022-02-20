import React, {useState} from 'react'
import './addroom.css';
import {Link} from 'react-router-dom';

export default function AddRoom(props) {
    const [type1, setType1] = useState("");
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const checkAddRoom = () =>{
        if(name.length >= 1 && !(type1 == "" || type1 == undefined && type1 == "בחר"))
            props.add(type1, name, color);
        else{
            props.updateMainRooms();
            alert("error");
            //document.location.href="/";
            //props.updateMainRooms();
        }
    }

    return (
        // className = {props.displayClass}
        <div>
            <select name="" id="roomType" placeholder="סוג החדר" onChange = {(e) =>{
                //debugger; 
                const val = e.target[e.target.selectedIndex].value;
                setType1(val);}}>
                <option value="בחר">
                 בחר
                </option>
                <option value="חדר שינה">
                חדר שינה
                </option>
                <option value="אמבטיה/שירותים">
                אמבטיה/שירותים
                </option>
                <option value="מטבח"> 
                מטבח
                </option>
            </select>
            <input type="text" placeholder="שם החדר" maxlength="5" onChange = {(e) =>{setName(e.target.value);}}></input>
            <input type="text" placeholder="צבע החדר" onChange = {(e) =>{setColor(e.target.value);}}></input>
            <Link to='/' style={{ textDecoration: "none", color:"white"}}><button onClick={checkAddRoom}>צור</button></Link>
        </div>
    )
}
