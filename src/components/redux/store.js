import { configureStore } from "@reduxjs/toolkit";
import MainListReducer from "./MainListSlice";
// import ListReducer from "./ListSlice";

const store = configureStore({
  reducer: {
    mainList: MainListReducer,
    // list: ListReducer
  },
});

export default store;
