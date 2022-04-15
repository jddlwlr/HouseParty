import { React } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Store from "./utils/GlobalState";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

import "./App.css";
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
      <div className="App">
        <img src={logo} alt="logo" className="logo" />
        <Router>
          <Store>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Store>

        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
