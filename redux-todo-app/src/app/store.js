import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../features/Todos/TodoSlice';

export const store = configureStore({
    reducer:{
        todos: todoReducer,
    }
})