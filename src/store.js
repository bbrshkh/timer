import { configureStore } from "@reduxjs/toolkit";

import { timerReducer } from './redux/timerReducer.js';
import { counterReducer } from "./redux/counterReducer.js";
import { alertReducer } from "./redux/alertReducer.js";

export const store = configureStore({
    reducer : { 
        timerReducer, 
        counterReducer,
        alertReducer
    },
    
});