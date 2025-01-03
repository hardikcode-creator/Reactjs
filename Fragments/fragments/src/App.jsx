import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './components/Fooditems'
import Errormessage from "./components/Errormessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  
  let texttoshow="food items inital value";
  let [textStatevalue,setTextState]=useState("inital value");
  let [foodItems,setFoodItems]=useState(["Green Vegetables", "Roti", "Salad"]);
  const handleEvent=(e)=>{
    if(e.key==='Enter'){
      console.log(e.target.value);
    texttoshow=e.target.value;
    //stateless wont re-render
    let newItem=e.target.value;
    e.target.value="";
   let newItems=[...foodItems, newItem];
    setFoodItems(newItems);
    setTextState(newItem);
    }
    //method to change value of state
};

    return (
      <> <Container>
      <h1 className="food-heading">Healthy food</h1>
     <Errormessage  items={foodItems}/>
     <FoodInput handleEvent={handleEvent}></FoodInput>
     { /* this value is not changing each time onchange event is invoked because it is stateless */ }
     <p>{texttoshow}</p>
     <p>{textStatevalue}</p>
     <FoodItems items={foodItems}/>
    </Container>
    <Container>
      <p>
        "Hello this is use of passing children props"
      </p>
    </Container>
    </>
   
    );
}

export default App
