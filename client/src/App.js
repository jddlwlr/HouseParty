import { React, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import LiveParty from "./components/LiveParty";
import NewParty from "./components/NewParty";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Store, { Context } from "./utils/GlobalState";
import Navbar from "./components/Navbar";

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
      <Navbar />
      {Auth.loggedIn() ? <></> : <Login />}
      {console.log(Store)}
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<NewParty />} />
          <Route path="/party" element={<LiveParty />} />
        </Routes>
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
