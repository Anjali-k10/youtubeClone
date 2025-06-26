import { createSlice } from "@reduxjs/toolkit";
import { LiveChat_Number } from "./constant";

const chatSlice=createSlice({
    name: "chat",
    initialState: {
        messages: [],
        
    },
    reducers: {
        addMessage:(state, action) =>{
            if (state.messages.length >= 15) {
        // Remove the oldest message (from the beginning)
        state.messages.shift();
    }
    // Add the new message to the end
    state.messages.push(action.payload);
        },
       
        clearMessages:(state) =>{
        state.messages = [];
       
        },
    },
})

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;