import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "./sideSlice";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";
import chatReducer from "./chatSlice";
const store=configureStore({
    reducer:{
        menu:menuReducer,
        search:searchReducer,
        video:videoReducer,
        chat:chatReducer,
    }
})

export default store;