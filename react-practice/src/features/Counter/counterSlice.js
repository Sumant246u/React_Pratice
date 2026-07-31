import {createSlice, isAction} from "@reduxjs/toolkit";

const initialState = {
    value:0,
};

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        incrmentByAmount:(state,payload)=>{
            state.value +=isAction.payload;
        },
    },
});

export  const{increment, decrement, incrmentByAmount} = counterSlice.actions;

export default counterSlice.reducer;