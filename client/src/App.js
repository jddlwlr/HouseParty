import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth";

import "./App.css";
import Header from "./components/Header";

import About from "./components/About";
import Party from "./components/Party";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";

import User from "./components/User";

import Signup from "./pages/Signup";
import NewParty from "./components/NewParty";
import Store from "./utils/GlobalState";
import RuleForm from "./components/RuleForm";

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

//import LoggingIn from "./LoggingIn";
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Store>
          <Header key="navHeader" />
          <div className="task-manager">
            {Auth.loggedIn() ? (
              <>
                <div className="left-bar">
                  <div className="left-content">
                    <User />
                  </div>
                </div>
                <div className="page-content ">
                  <Home id="home" />
                  <div></div>
                  <Party key="liveParty" />
                  <div></div>
                  <NewParty key="createParty" />
                  <div></div>
                  <div></div>
                  <About key="aboutParty" />
                </div>
                <div className="right-bar">
                  <div className="right-content">
                    <RuleForm key="ruleTriggers" />
                  </div>
                </div>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </>
            ) : (
              <Login />
            )}
          </div>{" "}
          <Footer />
        </Store>
      </Router>
    </ApolloProvider>
  );
}

export default App;
