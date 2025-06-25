import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "./sideSlice";
import searchReducer from "./SearchSlice";
import videoReducer from "./videoSlice";
const store=configureStore({
    reducer:{
        menu:menuReducer,
        search:searchReducer,
        video:videoReducer
    }
})

export default store;