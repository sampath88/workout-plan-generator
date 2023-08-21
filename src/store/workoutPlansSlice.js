import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePlan: "",
  history: [],
};

export const workoutPlanSlice = createSlice({
  name: "workoutPlan",
  initialState,
  reducers: {
    setActivePlan: (state, action) => {
      const { activePlan } = action.payload;
      state.activePlan = activePlan;
    },
    addPlan: (state, action) => {
      const { newPlan } = action.payload;
      state.history.push(newPlan);
    },
  },
});

export const { setActivePlan, addPlan } = workoutPlanSlice.actions;
const workoutPlanReducer = workoutPlanSlice.reducer;
export default workoutPlanReducer;
