import { configureStore } from "@reduxjs/toolkit";
import { pharmacySlice } from "./pharmacy/slice";
import { medickSlice } from "./medick/slice";

export const store = configureStore({
  reducer: {
    pharmacy: pharmacySlice.reducer,
    medick: medickSlice.reducer,
  },
});
