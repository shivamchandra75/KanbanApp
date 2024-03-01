import { configureStore } from "@reduxjs/toolkit";
import MainListReducer from "./MainListSlice";

const store = configureStore({
  reducer: {
    mainList: MainListReducer,
  },
});

export default store;
