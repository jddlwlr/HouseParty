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
import User from "./components/User";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/Info";

import Signup from "./pages/Signup";
import NewParty from "./components/NewParty";
import Store from "./utils/GlobalState";
import RuleForm from "./components/RuleForm";
import logo from "../src/images/party_foul.png";

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
          <div className="App">
            <Header />
            <div className="task-manager">
              {Auth.loggedIn() ? <></> : <Login />}
              {console.log(Store)}

              <Routes>
                <Route path="party" element={<Party />} />
                <Route path="create" element={<NewParty />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Info />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>{" "}
            <Footer class="footerContainer" />
          </div>
        </Store>
      </Router>
    </ApolloProvider>
  );
}

export default App;
