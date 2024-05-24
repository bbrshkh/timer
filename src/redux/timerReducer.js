import { createSlice } from "@reduxjs/toolkit";

const initialState = {time:0, isRunning: false};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTimer: (state, action) => {
            state.isRunning=true;
        },
        pauseTimer: (state, action) => {
            state.isRunning=false;
        },
        resetTimer: (state, action) => {
            state.time = 0;
        },
        incrementTimer: (state, action) => {
            ++state.time;
        }
    }
})


export const timerReducer = timerSlice.reducer;
export const {
    startTimer,
    pauseTimer,
    resetTimer,
    incrementTimer
} = timerSlice.actions;