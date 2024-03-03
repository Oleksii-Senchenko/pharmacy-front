
import { createAsyncThunk } from "@reduxjs/toolkit";

export const takeValue = createAsyncThunk(
  "medecine/takeValue",
  async (data, thunkAPI) => {
    return data;
  }
);
