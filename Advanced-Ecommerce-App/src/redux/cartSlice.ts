
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}


interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => { 
            console.log("Add to cart", action.payload)
            state.items.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            console.log("Remove from cart", action.payload)
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCartItemsCount = (state: RootState) => state.cart.items.length;
export default cartSlice.reducer;
