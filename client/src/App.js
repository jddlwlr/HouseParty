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
import Home from "./components/Home";
import About from "./components/About";
import LiveParty from "./components/LiveParty";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Store, { Context } from "./utils/GlobalState";
//import RuleForm from "./components/RuleForm";

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
          <Home />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/party" element={<LiveParty />} />
          </Routes>
          <Footer />
        </Store>
      </Router>
    </ApolloProvider>
  );
}

export default App;
