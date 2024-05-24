import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: null};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        resetMessage: (state, action) => {
            state.message= '';
        }
    },
    extraReducers: {
        'timer/startTimer': (state, action)=>{
            state.message= 'Timer has been started'
        },
        'timer/pauseTimer': (state, action)=>{
            state.message= 'Timer has been paused'
        },
        'timer/reset': (state, action)=>{
            state.message= 'Timer has been reseted'
        },
        'counter/incrementCounter': (state, action)=>{
            state.message= 'Count incresed by 1'
        },
        'counter/decrementCounter': (state, action)=>{
            state.message= 'Count decresed by 1'
        },
        'counter/resetCounter': (state, action)=>{
            state.message= 'Count set to 0'
        },
    }
})

export const alertReducer = alertSlice.reducer;

export const { resetMessage } = alertSlice.actions;

export const alertSelector = (state)=> state.alertReducer ;