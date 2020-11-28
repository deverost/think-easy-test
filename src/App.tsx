import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store/rootReducer";
import MainContainer from "./containers/MainContainer/MainContainer";
import {
  BrowserRouter
} from 'react-router-dom';

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
