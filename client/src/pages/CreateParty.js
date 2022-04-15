import NewParty from "../components/NewParty";
import User from "../components/User";
import RuleForm from "../components/RuleForm";

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
            <NewParty />
          </div>
          <div className="right-bar">
            <div className="right-content">
              <RuleForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateParty;
