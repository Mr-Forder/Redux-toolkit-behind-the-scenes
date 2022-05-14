import { createSlice } from "@reduxjs/toolkit";

//set initial state for our counter
const initialState = {
  count: 0,
};

//create a slice for our counter functionality
export const counterSlice = createSlice({
  name: "counter", //give our slice a name
  initialState, //pass in our inititial state
  reducers: {
    //create some actions - action 'incrememnt' then the logic for it (take state object and add 1 to the count value inside it)
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decreaseFive: (state) => {
      state.count -= 5;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

//export our actions
export const { increment, decrement, decreaseFive, reset, incrementByAmount } =
  counterSlice.actions;

//export our counterSlice - note we're exporting just the reducer
export default counterSlice.reducer;
