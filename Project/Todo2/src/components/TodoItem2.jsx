import Todoitem1 from "./Todoitem1";

function Todoitem({todoitem, handleDelete}){
    return (
        <div className="items-container">
            {todoitem.map((item)=>(
                <Todoitem1 key={item.name} date={item.date} name={item.name} handleDelete={handleDelete}></Todoitem1>
            ))}
        </div>


    );

}
export default Todoitem;