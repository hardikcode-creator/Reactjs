import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice=createSlice({
    name:'fetchstatus',
    initialState:{
        fetchDone:false,
        currentFetching:false,
    },
    reducers:{
        markFetchDone:(state)=>{
         state.fetchDone=true;
        },
        markFetching:(state)=>{
          
        state.currentFetching=true;
        }
        ,
        markFinish:(state)=>{
         state.currentFetching=false;
        }

    }
});
export const fetchstatusAction=fetchStatusSlice.actions;
export default fetchStatusSlice;