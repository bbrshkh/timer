import { createSlice } from '@reduxjs/toolkit';

const initialState = { count : 0};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incrementCounter : ( state, action ) => {
            ++state.count;
        },
        decrementCounter : ( state, action ) => {
            --state.count;
        },
        resetCounter : ( state, action ) => {
            state.count = 0;
        }
    }
})


export const counterReducer = counterSlice.reducer;

export const {
    incrementCounter,
    decrementCounter,
    resetCounter
} = counterSlice.actions;