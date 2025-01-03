import { useContext } from "react";
import { TodoItemsCOntext } from "../store/todo-store";
function Todoitem({name,date}){
  console.log(name);
  const contextObj=useContext(TodoItemsCOntext);
  const deleteitems=contextObj.deleteItem;
    return (
        <div class="container">
        <div class="row kg-row">
        <div class="col-4">
         {name}
        </div>
        <div class="col-4">
        {date}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button"
          onClick={()=>deleteitems(name,date)}>
            Delete
          </button>
        </div>
      </div>
      </div>


    );

}
export default Todoitem;