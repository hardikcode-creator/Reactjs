import { useRef} from "react";
import { useContext } from "react";
import { TodoItemsCOntext } from "../store/todo-store";
import { IoAddCircleOutline } from "react-icons/io5";
function Addtask(){
const todoNameElt=useRef();
const todoDateElt=useRef();


const {addItem}=useContext(TodoItemsCOntext);




  const handleAddButton=(event)=>{
    const Name=todoNameElt.current.value;
const Date=todoDateElt.current.value;
    console.log(event);
    event.preventDefault();
   
    //when we are using ref code will not required state changes nor event handling too change name and date onChange
    //since it auto updates change when button is clicked
    console.log(`${Name} ${Date}`);
    addItem(Name,Date);
    // onNewItem(todoName,todoDate);
    // setDate("");
    // setName("");
  }
return (
<div class='container'>
<form  onSubmit={handleAddButton} className="row kg-row">
      <div class="col-4">
        <input type="text" placeholder="Enter task here"
          ref={todoNameElt} ></input>
      </div>
      <div class="col-4">
        <input type="date"  ref={todoDateElt}></input>
      </div>
      <div class="col-2">
        <button  class="btn btn-success kg-button"
         >
         <IoAddCircleOutline/>
        </button>
      </div>
    </form>
</div>
);

}
export default  Addtask;