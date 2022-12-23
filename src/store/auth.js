import {createSlice} from '@reduxjs/toolkit'

const initialAuthenticationState = { isAuthenticated: false };
const authSilce = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authAction = authSilce.actions
export default authSilce.reducer