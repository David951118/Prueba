import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCredentials: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { setUserCredentials } = userSlice.actions;

export default userSlice.reducer;
