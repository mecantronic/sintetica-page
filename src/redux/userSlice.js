import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    credits: 0,
    role: "",
  },
  reducers: {
    setUser: (state) => {
      state.userName = "userName";
      state.name = "user";
      state.surname = "user";
      state.email = "user@example.com";
      state.phone = "123-456";
      state.credits = 100;
      state.role = "premuim";
    },
    removeUser: (state) => {
      state.userName = "";
      state.name = "";
      state.surname = "";
      state.email = "";
      state.phone = "";
      state.credits = 0;
      state.role = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
