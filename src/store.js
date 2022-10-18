import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./reducers/clientsReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
    user: userReducer,
  },
});

export default store;
