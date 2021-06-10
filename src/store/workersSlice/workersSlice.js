import { createSlice } from "@reduxjs/toolkit";
import compareWorkHours from "../../utils/compareWorkHours";
import setComparisonsData from "../../utils/setComparisonsData";
import compareWithNewWorker from './../../utils/compareWithNewWorker';

const initialState = {
  workersData: [],
  comparisons: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers : {
    addWorker: (state, action) => {
      compareWithNewWorker(state.workersData, {...action.payload, score: 0, compared: []});
      state.comparisons = setComparisonsData(state.workersData);
      state.workersData = state.workersData.sort((prev, current) =>  current.score - prev.score);
    },
    removeWorker: (state, action) => {
      state.workersData = state.workersData.filter((item) => item.workerName !== action.payload);
      compareWorkHours(state.workersData);
      state.comparisons = state.comparisons.filter((item) => item.better !== action.payload && item.worse !== action.payload);
    },
  }
});


export const {addWorker, removeWorker} = itemSlice.actions;
export default itemSlice.reducer;