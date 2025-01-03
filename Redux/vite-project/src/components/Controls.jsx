import { useDispatch} from "react-redux";
import { useRef } from "react";
const Controls=()=>{
  const dispatch=useDispatch();
  const element=useRef();
  const handleIncrement=()=>{
    dispatch({type:"INCREMENT"});
  }
  const handleDecrement=()=>{
    dispatch({type:"DECREMENT"});
  }
  const handleAdd=()=>{
    dispatch({type:"ADDITION",payload:{
     num: element.current.value,
    }});
    element.current.value="";
  };
  const handleSub=()=>{
    dispatch({type:"SUBTRACT", payload:{
      num:element.current.value,
    }})
    element.current.value="";
  };

return (
  <> <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
  <button type="button" class="btn btn-primary" onClick={handleIncrement}>+1</button>
<button type="button" class="btn btn-secondary" onClick={handleDecrement}>-1</button>
</div>
<div class="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
  <input type="text" placeholder="Enter a number" ref={element}/>
<button type="button" class="btn btn-danger" onClick={handleAdd} >Add</button>
<button type="button" class="btn btn-danger" onClick={handleSub} >Subtract</button>
</div>

</>
   


    
);
}
export default Controls;