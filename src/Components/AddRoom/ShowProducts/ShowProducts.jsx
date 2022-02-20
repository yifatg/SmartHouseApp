import React, {useState} from 'react'
import './showproducts.css';
import {Link} from 'react-router-dom';

export default function ShowProducts(props) {
    const [onClass, setonClass] = useState("red");

    // const updateOnClass = (onOff) =>{
    //     if(onOff){
    //         setonClass("green");
    //         alert("green");
    //         alert("on class "+onClass);
    //     }
    //     else{
    //         setonClass("red");
    //         alert("red");
    //     }
    // }
    return (
        <div className={props.class2} >
            <div className="div1">
              {(typeof props.products !== 'undefined' )?
            (props.products.map((element, index) => {
                return <div className="space">
                    <div className="circle" style={{backgroundColor: element.onP}}></div>
                    <label onClick={() => {
                        debugger;
                        //ternary result
                        let color1 = (element.onP == "red") ? "green" : "red";
                        props.updateOn(color1, props.roomName, index);
                        //updateOnClass(element.onP);
                        }}>{element.nameP}
                   </label>
                </div> 
            })):("")}
            {/* {
            props.products.map((element, index) => {
                return <div className="space">
                    <div className="circle" style={{backgroundColor: onClass}}></div>
                    <label onClick={() => {
                        debugger;
                        props.updateOn(!element.onP, props.roomName, index);
                        updateOnClass(element.onP);
                        }}>{element.nameP}
                   </label>
                </div> 
            })} */}
            <Link to='/' style={{ textDecoration: "none", color:"white"}}><button id="back" onClick={() =>{props.updateMainRooms();}}>חזרה</button></Link>
            </div>
        </div>
    )
}
