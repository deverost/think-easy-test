import { combineReducers } from '@reduxjs/toolkit';
import { reducer as sentenceReducer } from './slices/stringData'

export default combineReducers({
  sentence: sentenceReducer,
});