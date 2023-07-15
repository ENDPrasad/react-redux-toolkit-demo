import { configureStore } from "@reduxjs/toolkit"

import { createSlice } from "@reduxjs/toolkit"


const initialState = { counter: 10 }

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state, action){
            state.counter = state.counter - action.payload;
        }
    }
})




export const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;


