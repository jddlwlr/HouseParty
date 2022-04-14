import React from "react";
import { useQuery } from "@apollo/client";

import User from "../components/User";
import Party from "../components/Party";
import Live from "../components/Live";

import { QUERY_RULE } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_RULE);
  const rules = data?.rules || [];

  if (loading) {
    return (
      <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          class="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  if (!rules?.name) {
    return <h3> Please add party rules to your game!</h3>;
  }

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

          <div className="right-bar">
            <Live className="liveContainer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
