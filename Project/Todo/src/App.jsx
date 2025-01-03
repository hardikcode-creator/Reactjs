import Addtask from "./components/AddTask";
import Appname from "./components/AppName";
import Todoitem2 from "./components/Todoitem2";
import "./mycss.css"
function App() {

  let todoitem=[{
    name:"Buy milk",
    date:"4/10/23"
  },
  {
    name:"DO Homework",
    date:"4/10/23"
  }
];
  return(
   <center class="todo-container">
<Appname></Appname>
<div class="item-container">
<Addtask></Addtask>
 <Todoitem2 todoitem={todoitem}></Todoitem2>


 </div>
  </center>
  )
  
}

export default App; 
