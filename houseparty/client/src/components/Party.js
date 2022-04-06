import React from "react";
import { rules } from "../../../rules";
import partyName from "";

function Party() {
  return (
    <section>
      <div className="container">
        <div>
          <h2>{partyName}</h2>
          <p>
            {" "}
            If any of these events below happen, you will be alerted to take a
            drink!
          </p>
        </div>

        <div>
          {rules.map((rule) => (
            <div className="rules contents row column">
              <button className="triggerBtn" onClick={alert}>
                <h1 className="ruleCard">{rule.trigger}</h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Party;
