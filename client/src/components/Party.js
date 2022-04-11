import React from "react";
import { Link } from "react-router-dom";
import { rules } from "../rules";
import Auth from "../utils/auth";
//import partyName from "";

function Party() {
  return (
    <section>
      {Auth.loggedIn() ? (
        <>
          <div className="container" id="">
            <div>
              <h2>House Party</h2>
              <p>
                {" "}
                If any of these events below happen, you will be alerted to take
                a drink!
              </p>
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
        </>
      ) : (
        <p>
          {" "}
          You need to be logged in play! Please <Link to="/signin">
            login
          </Link>{" "}
          or <Link to="/signUp">signup.</Link>
        </p>
      )}
    </section>
  );
}

export default Party;
