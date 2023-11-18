import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        addFilter: (state, action) => {
            state.items = action.payload
        }
    }
})

export const  {addProduct, addFilter} = productSlice.actions;
export default productSlice.reducer;