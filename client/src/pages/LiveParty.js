import Party from "../components/Party";

import Live from "../components/Live";

const LiveParty = () => {
  return (
    <main>
      <div className="App">
        <div className="task-manager">
          <div className="left-bar">
            <div className="upper-part">
              <div className="actions"></div>
            </div>
            <div className="left-content"></div>
          </div>
          <div className="page-content">
            <Party />
          </div>
          <div className="right-bar">
            <Live />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LiveParty;
