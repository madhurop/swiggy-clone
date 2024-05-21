import { createSlice,current } from "@reduxjs/toolkit"
const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
            
            
        },
        clearItems:(state)=>{
            state.items.length=0;
        },
    }
})

export const {addItems,removeItems,clearItems} = cartSlice.actions
export default cartSlice.reducer;