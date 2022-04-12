import React from "react";
import { useQuery } from "@apollo/client";

import User from "../components/User";
import Party from "../components/Party";
import Live from "../components/Live";

import { QUERY_RULE } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_RULE);
  const rules = data?.rules || [];

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
            <Party />
          </div>
          <div className="right-bar">
            <Line />
            <Live className="liveContainer" />
          </div>
        </div>
      </div>
    </main>
  );
};
