import { configureStore } from "@reduxjs/toolkit";
import { pharmacySlice } from "./pharmacy/slice";

export const store = configureStore({
  reducer: {
    pharmacy: pharmacySlice.reducer,
  },
});
