import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [{ id: 1, name: "iphone 15 promax", price: 1500 }] };
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export default productSlice.reducer;

