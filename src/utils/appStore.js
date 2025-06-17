import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "./sideSlice";
const store=configureStore({
    reducer:{
        menu:menuReducer,
    }
})

export default store;