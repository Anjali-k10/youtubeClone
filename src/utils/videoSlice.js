import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name: "video",
    initialState: {},
    reducers: {
        videoData: (state, action) => action.payload,
    },
})

export const { videoData } = videoSlice.actions;
export default videoSlice.reducer;