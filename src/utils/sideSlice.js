import { createSlice } from '@reduxjs/toolkit';


const sideSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuOpen: true,
        
    },
    reducers:{
     toggleMenu: (state, action) => {
       state.isMenuOpen= !state.isMenuOpen;
      },
      closeMenu:(state)=>{
        state.isMenuOpen = false;
      }
    
    }
});

export const { toggleMenu ,closeMenu } = sideSlice.actions;
export default sideSlice.reducer;
