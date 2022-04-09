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
import Header from "./components/Header";
import About from "./components/About";
import Party from "./components/Party";
import User from "./components/User";
import Live from "./components/Live";
import Footer from "./components/Footer";
import Login from "./components/Login";

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
        <div className="App">
          <div className="task-manager">
            <div className="left-bar">
              <div className="upper-part">
                <div className="actions"></div>
              </div>
              <div className="left-content">
                <User className="userContainer" />
              </div>
            </div>
            <div class="page-content">
              <Header className="navBarContainer" />
              <Party className="partyContainer" />
              <About className="aboutContainer" />
            </div>
            <div className="right-bar">
              <div className="top-part">
                <Live className="liveContainer" />
              </div>
            </div>
          </div>
          <Footer class="footerContainer" />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
