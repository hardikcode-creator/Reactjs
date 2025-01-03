import Addtask from "./components/AddTask";
import Appname from "./components/AppName";
import Todoitem2 from "./components/Todoitem2";
import "./mycss.css"

import TodoItemsContextProvider from "./store/todo-store";
function App() {

//   let [todoitem, setItem]=useState([{
//     name:"Buy milk",
//     date:"4/10/23"
//   },
//   {
//     name:"DO Homework",
//     date:"4/10/23"
//   }
// ]);




  return(
    //context sharing for TodoitemsContext
    <TodoItemsContextProvider>
       <center class="todo-container">
<Appname></Appname>
<div class="item-container">
<Addtask ></Addtask>
 <Todoitem2 ></Todoitem2>
 </div>
  </center>
    </TodoItemsContextProvider>
  

  );
  
}

export default App; 
