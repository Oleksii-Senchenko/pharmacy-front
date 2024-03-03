import { createSlice } from "@reduxjs/toolkit";
import { takeValue } from "./operations";

export const medickSlice = createSlice({
  name: "medecine",
  initialState: {
    total: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(takeValue.fulfilled, (state, action) => {
      state.total = action.payload;
    });
  },
});
