import { createSlice } from "@reduxjs/toolkit"
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
            console.log(action.payload)
            state.items.filter(menu=>menu.id ==action.payload);
        },
        clearItems:(state)=>{
            state.items.length=0;
        },
    }
})

export const {addItems,removeItems,clearItems} = cartSlice.actions
export default cartSlice.reducer;