
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./redux/slices/eventSlice";
export const store = configureStore({
    reducer: {
        eventReducer
    }

})