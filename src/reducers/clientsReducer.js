import { createSlice } from "@reduxjs/toolkit";
import clientsService from "../services/clientsService";

const clientsSlice = createSlice({
  name: "clients",
  initialState: [],
  reducers: {
    addClient(state, action) {
      const newClient = action.payload;
      const newClients = state.concat(newClient);
      return newClients;
    },
    setClients(state, action) {
      const loadedClients = action.payload;
      return loadedClients;
    },
  },
});

export const { addClient, setClients } = clientsSlice.actions;

export const loadClients = (token) => {
  return async (dispatch) => {
    const loadedClients = await clientsService.getAll(token);
    dispatch(setClients(loadedClients));
  };
};

const clientsReducer = clientsSlice.reducer;
export default clientsReducer;
