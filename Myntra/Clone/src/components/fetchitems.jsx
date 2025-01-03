import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../store/itemslice";
import { fetchstatusAction } from "../store/fetchStatusSlice";

const Fetchitems=()=>{
    const fetchStatus=useSelector(store=>store.fetchstatus);
    const dispatch=useDispatch();
  
    useEffect(()=>{
        if(fetchStatus.fetchDone) return;
        const controller=new AbortController();
        const signal=controller.signal;
        dispatch(fetchstatusAction.markFetching());
        fetch("http://localhost:8080/items", {signal})
        .then((res)=>res.json())
        .then(({items})=>{
            dispatch(fetchstatusAction.markFetchDone());
            dispatch(fetchstatusAction.markFinish());
        dispatch(itemActions.addInitialState(items[0]));

        });
        return ()=>{
            controller.abort();
        };
    },[fetchStatus]);
        
    return <>
  
    </>
}
export default Fetchitems;