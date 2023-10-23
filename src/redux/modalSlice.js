import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalType: "closed",
  },
  reducers: {
    contactModal: (state) => {
      state.modalType = "contact";
    },
    loginModal: (state) => {
      state.modalType = "login";
    },
    signupModal: (state) => {
      state.modalType = "signup";
    },
    closeModal: (state) => {
      state.modalType = "closed";
    },
  },
});

export const { contactModal, loginModal, signupModal, closeModal } =
  modalSlice.actions;
export default modalSlice.reducer;
