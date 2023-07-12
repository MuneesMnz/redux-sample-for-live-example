import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserTwo = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/1/update",
    user
  );
  return res.data;
});

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
    //Async Thunk Metohd
    //Asyncronus Methods
    // updateStart: (state) => {
    //   state.pending = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // updateError: (state) => {
    //   state.error = true;
    //   state.pending = false;
    // },
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
  extraReducers: {
    //Async Thunk Metohd

    [updateUserTwo.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUserTwo.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      // (state.error = false);
    },
    [updateUserTwo.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

//Asyncronus Methods
export const { updateStart, updateSuccess, updateError } = userSlice.actions;

//Syncronus Methods
// export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;
