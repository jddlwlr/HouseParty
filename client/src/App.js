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
  );
}

export default App;
