import { configureStore } from "@reduxjs/toolkit";
import workersSlice from "./workersSlice/workersSlice";

const store = configureStore({
  reducer : {workers: workersSlice}
});

export default store;