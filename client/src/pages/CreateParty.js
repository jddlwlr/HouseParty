import NewParty from "../components/NewParty";
import User from "../components/User";
import party from "../images/party.jpg";

const CreateParty = () => {
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
            <User />
          </div>
          <div className="right-bar">
            <div className="mask1">
              <img src={party} alt="clubparty" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateParty;
