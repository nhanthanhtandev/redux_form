import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product";
import studentReducer from './slices/student';
const store = configureStore({
    reducer: {
        product: productSlice,
        students: studentReducer,
    },
    devTools: true,
})

export default store;