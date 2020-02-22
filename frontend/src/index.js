import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { configureStore } from "./store/configureStore";

const my_store = configureStore();

// console.log(store.getState());

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={my_store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

// All our router functionalities is being passed into our App

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();