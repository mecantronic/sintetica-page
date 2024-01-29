import { createSlice } from "@reduxjs/toolkit";
import api from "../api/apiConfig";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    userName: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    freeCredits: 0,
    premiumCredits: 0,
    service: "",
  },
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
    },
    removeUser: (state,) => {
      state.token = "";
      state.userName = "";
      state.name = "";
      state.surname = "";
      state.email = "";
      state.phone = "";
      state.freeCredits = 0;
      state.premiumCredits = 0;
      state.service = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const loginRequest = async (credentials) => {
  try {
    const { data } = await api.post("/auth/login", credentials);
    return data.data;
  } catch (error) {
    return { error: error };
  }
};

export const registerRequest = async (credentials) => {
  try {
    const { data } = await api.post("/auth/register", credentials);
    return data.data;
  } catch (error) {
    return { error: error };
  }
};

export default userSlice.reducer;
