import { Link } from "react-router-dom";
import { rules } from "../rules";
import Auth from "../utils/auth";
import { Context } from "../utils/GlobalState";
//import partyName from "";

import React, { useContext, useState } from "react";

import { useQuery } from "@apollo/client";

import { QUERY_PARTY } from "../utils/queries";

function Party() {
  const [state, setState] = useContext(Context);

  const { loading, error, data } = useQuery(QUERY_PARTY, {
    variables: { id: state.partyId },
  });
  if (loading) return "Loading";
  // if (error) return `${error.message}`;

  console.log(data?.party);

  const ruleList = data?.party.rules || [];
  const partyName = data?.party.name;

  const listRules = ruleList.map((rule) => (
    <button className="triggerBtn">{rule.name}</button>
  ));

  if (Context.new === true) {
    return null;
  }
  return (
    <section>
      {Auth.loggedIn() ? (
        <>
          <div className="container " id="liveParty">
            <div>
              <h3 className="info">{partyName}</h3>
              <p>
                {" "}
                If any of these events below happen, you will be alerted to take
                a drink!
              </p>
            </div>

            <div className="container">
              <div className="row justify-content-col-md-center">
                <div className="rules partyTrigger col col-md-auto">
                  <h1 className="ruleCard partyTrigger">{listRules}</h1>
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
