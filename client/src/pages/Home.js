import User from "../components/User";
import Party from "../components/Party";
import RuleForm from "../components/RuleForm";
import party from "../images/party.jpg";

const Home = () => {
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
          <div class="page-content">
            <img src={party} alt="partyImage" id="partyimg" />
          </div>
          <div className="right-bar">
            <RuleForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
