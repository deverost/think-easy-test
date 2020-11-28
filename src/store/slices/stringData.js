import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sentence: ''
}

export const sentence = createSlice({
  name: 'stringData',
  initialState,
  reducers: {
    setSentence: {
      reducer: (state, action) => {
        console.log(action.payload)
        state.sentence = action.payload;
      },
    },
}})

const { reducer, actions } = sentence;
const { setSentence } = actions;

export {
  setSentence, reducer,
};
