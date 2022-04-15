import About from "../components/About";
import User from "../components/User";
import ruleBook from "../images/ruleBook.jpg";

const Info = () => {
  return (
    <main>
      <div className="App">
        <div className="task-manager">
          <div className="left-bar">
            <div className="upper-part">
              <div className="actions"></div>
            </div>
            <div className="left-content">
              <User />
            </div>
          </div>
          <div className="page-content">
            <About />
          </div>
          <div className="right-bar">
            <img src={ruleBook} alt="rulebook" id="rulebook" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Info;
