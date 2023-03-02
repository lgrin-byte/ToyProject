import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./hooks/count/counterSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
