import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducer";

export const store=configureStore({
    reducer:{
        quiz:quizReducer,
    }
});
