import { createSlice } from "@reduxjs/toolkit";
const dataSlice=createSlice({
    name:"data",
    initialState:{
        item:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.item.push("Madhur Redux")
        }
    }
 
})

export const{addData}=dataSlice.actions
export default dataSlice.reducer