import {createSlice} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemslice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagitem";
const myntraStore=configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchstatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
    }
});
export default myntraStore;
