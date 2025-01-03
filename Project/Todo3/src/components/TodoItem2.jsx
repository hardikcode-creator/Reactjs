import Todoitem1 from "./Todoitem1";
import { TodoItemsCOntext } from "../store/todo-store";
import { useContext } from "react";
function Todoitem(){
    const contextObj=useContext(TodoItemsCOntext);
    const todoitems=contextObj.todoitems;
    return (
        <div className="items-container">
            {todoitems.map((item)=>(
                <Todoitem1 key={item.name} date={item.date} name={item.name} ></Todoitem1>
            ))}
        </div>


    );

}
export default Todoitem;