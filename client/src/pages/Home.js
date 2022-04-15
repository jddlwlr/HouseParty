import React, { useContext } from "react";
import User from "../components/User";
import Party from "../components/Party";
import NewParty from "../components/NewParty";
import Live from "../components/Live";
import RuleForm from "../components/RuleForm";
import { Context } from "../utils/GlobalState";
const Home = () => {
  const [state] = useContext(Context);

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
            {state.currentParty !== null ? <Party /> : <NewParty />}

          </div>
          <div className="right-bar">
            <Live className="liveContainer" />
            {state.currentParty !== null ? <RuleForm /> : null}
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;