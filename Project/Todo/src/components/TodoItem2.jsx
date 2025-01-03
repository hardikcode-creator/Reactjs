import Todoitem1 from "./Todoitem1";
function Todoitem({todoitem}){
    return (
        <div className="items-container">
            {todoitem.map((item)=>(
                <Todoitem1 key={item.name} date={item.date} name={item.name}></Todoitem1>
            ))}
        </div>


    );

}
export default Todoitem;