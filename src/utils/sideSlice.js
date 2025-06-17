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
    
    }
});

export const { toggleMenu  } = sideSlice.actions;
export default sideSlice.reducer;
