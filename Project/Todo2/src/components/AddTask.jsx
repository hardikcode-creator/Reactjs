import { useState , useRef} from "react";
import { IoAddCircleOutline } from "react-icons/io5";
function Addtask({onNewItem}){
const todoNameElt=useRef();
const todoDateElt=useRef();

  let [todoName,setName]=useState("");
  let [todoDate,setDate]=useState("");
  const handleNamechange=(event)=>{
    setName(event.target.value);
  }

  const handleDatechange=(event)=>{
    setDate(event.target.value);
  }
  const handleAddButton=(event)=>{
    console.log(event);
    event.preventDefault();
    const Name=todoNameElt.current.value;
    const Date=todoDateElt.current.value;
    //when we are using ref code will not required state changes nor event handling too change name and date onChange
    //since it auto updates change when button is clicked
    console.log(`${Name} ${Date}`);
    onNewItem(Name,Date);
    // onNewItem(todoName,todoDate);
    // setDate("");
    // setName("");
  }
return (
<div class='container'>
<form  onSubmit={handleAddButton} className="row kg-row">
      <div class="col-4">
        <input type="text" placeholder="Enter task here"
       onChange={handleNamechange} value={todoName} ref={todoNameElt} ></input>
      </div>
      <div class="col-4">
        <input type="date" onChange={handleDatechange} value={todoDate} ref={todoDateElt}></input>
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