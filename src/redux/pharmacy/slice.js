import { createSlice } from "@reduxjs/toolkit";
import { getAll, getMedecine, getPharmacies, setNew } from "./operations";

export const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState: {
    pharmacies: [],
    medecine: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getPharmacies.fulfilled, (state, action) => {
      state.pharmacies = action.payload;
    });
    builder.addCase(getMedecine.fulfilled, (state, action) => {
      state.medecine = action.payload;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.medecine = action.payload;
    });
  },
});
