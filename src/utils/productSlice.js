import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.products = action.payload
        }
    }
})

export const  {addProduct} = productSlice.actions;
export default productSlice.reducer;