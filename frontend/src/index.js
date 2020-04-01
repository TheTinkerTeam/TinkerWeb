import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import reactReduxFirebaseProps from "./utils/firebase";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

require("dotenv").config();

const httpLink = new createHttpLink({
  uri: "http://localhost:5000/api/v2"
});

const authLink = setContext(async (_, { headers }) => {
  const currentUser = getFirebase().auth().currentUser;
  let token = null;
  if (currentUser) {
    token = await currentUser.getIdToken(true);
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// console.log(store.getState());

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
          <BrowserRouter>
            <App client={client} />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </ApolloProvider>,
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
