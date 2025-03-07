import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/cars-slice";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    cart: cartSlice
  }
})