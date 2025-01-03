import Addtask from "./components/AddTask";
import Appname from "./components/AppName";
import Todoitem2 from "./components/Todoitem2";
import "./mycss.css"
import { useState } from "react";
function App() {

  let [todoitem, setItem]=useState([{
    name:"Buy milk",
    date:"4/10/23"
  },
  {
    name:"DO Homework",
    date:"4/10/23"
  }
]);

const onNewItem=(itemName,itemDate)=>{
 let newTodoItems=[...todoitem,{name:itemName,date:itemDate}];
 setItem(newTodoItems);
}
const handleDelete=(todoName,todoDate)=>{
    const newitems=todoitem.filter((item)=>item.name!==todoName);
    setItem(newitems);
}
  return(
   <center class="todo-container">
<Appname></Appname>
<div class="item-container">
<Addtask onNewItem={onNewItem}></Addtask>
 <Todoitem2 todoitem={todoitem} handleDelete={handleDelete}></Todoitem2>
 </div>
  </center>
  );
  
}

export default App; 
