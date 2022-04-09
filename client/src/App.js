<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div></div>
      </Router>
    </ApolloProvider>
=======
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Party from "./components/Party";
import User from "./components/User";
import Footer from "./components/Footer";
//import Login from "./components/Login";
//import LoggingIn from "./LoggingIn";
function App() {
  return (
    <div className="App">
      <div class="task-manager">
        <div class="left-bar">
          <div class="upper-part">
            <div class="actions"></div>
          </div>
          <div class="left-content">
            <User className="userContainer" />
          </div>
        </div>
        <div class="page-content">
          <Header className="navBarContainer" />
          <Party class="partyContainer" />
          <About class="aboutContainer" />
          <Footer class="footerContainer" />
        </div>
      </div>
    </div>
>>>>>>> 6dc2ddbfbca14fa8d7e3aae53f9ecd45e06e25d1
  );
}

export default App;
