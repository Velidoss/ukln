import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './itemsReducer/itemsReducer';

const store = configureStore({
  reducer : {items: itemsReducer}
});

export default store;