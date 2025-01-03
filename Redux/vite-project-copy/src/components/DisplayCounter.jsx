import { useSelector } from "react-redux";

const Display=()=>{
    const counterObj=useSelector((store)=>store.counter);
    const counter=counterObj.counterVal;
    return ( <p class="lead mb-4">Counter value is:{counter}</p>
    );
};
export default Display;