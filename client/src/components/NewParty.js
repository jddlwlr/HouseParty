import React from "react";
import { rules } from "../rules";
//import partyName from "";
function Party() {
  return (
    <section>
      <div className="container" id="">
        <div>
          <h2>House Party</h2>
          <p> NEW PARTY</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              {rules.map((rule) => (
                <div className="rules contents row column ">
                  <button className="triggerBtn" onClick={alert}>
                    <h1 className="ruleCard">{rule.trigger}</h1>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Party;
