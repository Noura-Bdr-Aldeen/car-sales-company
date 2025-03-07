import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCars } from "../../../data";

export const fetchCars = createAsyncThunk("carsSlice/fetchCars", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return apiCars;
});

const carsSlice = createSlice({
    initialState: { cars: [], loading: false },
    name: "carsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;
            })
            .addCase(fetchCars.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default carsSlice.reducer;