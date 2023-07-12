import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "mnz",
      email: "mnz@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {
    //Asyncronus Methods

    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },

    //Syncronus Methods

    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => (state = {}),
    // addHello: (state, action) => {
    //   state.name = "hello " + action.payload.name;
    // },
  },
});


//Asyncronus Methods
export const { updateStart,updateSuccess,updateError} = userSlice.actions;

 //Syncronus Methods
// export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;
