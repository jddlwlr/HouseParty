import { React, useContext } from "react";
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
import Signup from "./components/Signup";
import NewParty from "./components/NewParty";
import Store, { Context } from "./utils/GlobalState";

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
  // const state = useContext(Context);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Store>
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
                {(Context.party = "new" ? <NewParty /> : <Party />)}
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
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Store>
      </Router>
    </ApolloProvider>
  );
}

export default App;
