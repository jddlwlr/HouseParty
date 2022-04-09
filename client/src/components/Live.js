import React from "react";
import { users } from "../users";

function Live() {
  return (
    <section>
      <div className="container" id="live">
        <div>
          <h2>Live Party</h2>
          <p> Participants</p>
        </div>

        <div>
          {users.map((user) => (
            <div className="rules participants ">
              <h1 className="ruleCard">{user.username}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Live;
