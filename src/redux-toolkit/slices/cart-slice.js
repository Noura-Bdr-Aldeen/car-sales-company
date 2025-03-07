import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findCar = state.find((car) => car.id === action.payload.id);
            if (findCar) {
                findCar.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        deleteFromCart: (state, action) => {
            return state.filter((car) => car.id !== action.payload.id)
        },
        clear: () => {
            return []
        },
    }
}
)
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;

