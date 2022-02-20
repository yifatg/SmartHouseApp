import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddRoom from './Components/AddRoom/AddRoom';
import ShowRooms from './Components/AddRoom/ShowRooms/ShowRooms';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Title from './Components/AddRoom/Title/Title';
import {Link} from 'react-router-dom';
import Room from './Components/AddRoom/Room/Room';
import AddProduct from './Components/AddRoom/AddProduct/AddProduct';
import ShowProducts from './Components/AddRoom/ShowProducts/ShowProducts';

function App() {

  const [plus, setPlus] = useState(true);
  const [displayClass, setDisplayClass] = useState("display1");
  //{type1:"חדר שינה", name:"aaa", color: "red",products:[{nameP:"מנורה", onP:"red"}]}
  const [roomsArr, setroomsArr] = useState([]);
  const[showAddP, setShowAddP] = useState("not-display");
  const[showProducts, setShowProducts] = useState("display1");

  const addRoom1 = (type1, name, color) =>{
    let obj = {type1:type1, name:name, color:color, products:[]};
    //for debug!!!
    let arr=[...roomsArr,obj];
    //set arr to itself
    //setroomsArr([...roomsArr, obj]);
    //setroomsArr([...roomsArr,obj]);
    setroomsArr([...arr]);
    setDisplayClass("display1");
  }
  const addProduct = (nameP, roomName) =>{
    debugger;
    let obj = {nameP:nameP, onP:"red"};
    roomsArr.forEach((element, index) => {
      if(element.name == roomName){
        //let arr = [...roomsArr];
        //arr[index].products.push(obj);
        //setroomsArr([...arr]);
        roomsArr[index].products.push(obj);
        //(roomsArr[index])["products"].push(obj);
        setroomsArr([...roomsArr]);
        return;
      }
  });
  }
const notDisplay = () => {
  setDisplayClass("not-display");
}
const Display = () => {
  setDisplayClass("display1");
}
const updateOnP = (flag, roomName, indexP) =>{
  roomsArr.forEach((element, index) => {
    if(element.name == roomName){
      roomsArr[index].products[indexP].onP = flag;
      setroomsArr([...roomsArr]);
      return;
    }
});
}
const showAddP1 = (flag) => {
  if(!flag)
    setShowAddP("not-display");
  else
    setShowAddP("display1");
}
const showProducts1 = (flag) => {
  if(!flag)
    setShowProducts("not-display");
  else
    setShowProducts("display1");
  let a=showProducts;
}

  return (
    <div className="App">
      <Title />
      <div className="triangle-up"></div>
      <div className="rectangle">
      <Router>
        <div className={displayClass}>
        <Link to='/addroom' style={{ textDecoration: "none", color:"white"}}><button onClick = {() => {
          // setPlus(!plus);
          // if(!plus)
          //   setDisplayClass("not-display")
          // else
          //   setDisplayClass("display1");
          setDisplayClass("not-display");
          }}>+ הוסף חדר</button></Link>
          {/*like menu!!!*/}
          {roomsArr.map((element) =>{
        return <ShowRooms type1={element.type1} name={element.name} color={element.color} className={displayClass} class1={notDisplay} /> 
        })}
        </div>
        <Switch>
          {/* {roomsArr.map((element)=>{
             return (<Route exact path='/' component={() =>(<ShowRooms type1={element.type1} name={element.name} color={element.color} />)}></Route>)
          })} */}
          {/* <Route exact path='/' component={roomsArr.map((element) =>{
        return <ShowRooms type1={element.type1} name={element.name} color={element.color} /> 
        })}></Route>  */}

          <Route exact path='/addroom' render={props => <AddRoom add={addRoom1} updateMainRooms={Display} />} ></Route>
        
          {roomsArr.map((element,index)=>{
            return <Route exact path={`/room${element.name}`} component={() =>(
            <div>
              <Room type1={element.type1} name={element.name} color={element.color} updateShowAddP={showAddP1} updateShowProducts={showProducts1} />
              <AddProduct roomName={element.name} roomType={element.type1} addP={addProduct} class1={showAddP} updateShowAddP={showAddP1} updateShowProducts={showProducts1} productsArr={element.products} />
              <ShowProducts products={roomsArr[index].products} updateOn={updateOnP} roomName={element.name}   class2={showProducts} updateMainRooms={Display} />
            </div>)}></Route>
          })}  
        </Switch>
      </Router>
      </div>
        {/* <button onClick = {() => {
          setPlus(!plus);
          if(!plus)
            setDisplayClass("not-display")
          else
            setDisplayClass("display1");
          }}><Link to='/addroom'>+ הוסף חדר</Link></button>
          {/* displayClass={displayClass} */}
        {/*<AddRoom add={addRoom1}/> */}
        {/* {roomsArr.map((element) =>{
        return <ShowRooms type1={element.type1} name={element.name} color={element.color} /> 
        })} */}
      </div>
  );
}

export default App;
