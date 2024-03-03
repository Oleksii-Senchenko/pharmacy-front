import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pharmacy-api-k1ig.onrender.com/api";
// axios.defaults.baseURL = "http://localhost:3001/api";

export const getPharmacies = createAsyncThunk(
  "pharmacy/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/pharmacy");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getMedecine = createAsyncThunk(
  "medecine/get",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/pharmacy/${id}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getAll = createAsyncThunk(
  "medecine-getAll/get",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/pharmacy/all`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
