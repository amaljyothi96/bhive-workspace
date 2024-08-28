import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Assuming you have a root reducer

// Create the Redux store
const store = configureStore({ reducer: rootReducer });

export default store;
