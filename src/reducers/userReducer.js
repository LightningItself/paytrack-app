import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/loginService";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      return user;
    },
  },
});
export const { setUser } = userSlice.actions;
export const jwtloginUser = ({ username, password }) => {
  return async (dispatch) => {
    const user = await loginService.jwtLogin({ username, password });
    dispatch(setUser(user));
  };
};
const userReducer = userSlice.reducer;
export default userReducer;
