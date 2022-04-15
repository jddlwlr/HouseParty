import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { Context } from "../utils/GlobalState";

import React, { useContext, useEffect } from "react";

import { useQuery } from "@apollo/client";

import { QUERY_PARTY } from "../utils/queries";

function Party() {
  const [state, setState] = useContext(Context);
  const { loading, error, data } = useQuery(QUERY_PARTY, {
    variables: { id: state.currentParty.id },
  });

  useEffect(() => {
    console.log("update currentParty")
  }, [state.currentParty]);
  if (loading) return "Loading";
  if (error) return `${error.message}`;

  // setState({
  //   ...state,
  //   currentParty: data?.party
  // })

  const ruleList = data?.party.rules || [];

  if (Context.new === true) {
    return null;
  }

  
  return (
    <section>
      {Auth.loggedIn() ? (
        <>
          {state.currentParty === null ? <div></div> : <div className="container">
            <div className="col">
              <div className="row">
                <h2>{data?.party.name}</h2>
              </div>
              <div className="row">
                <p>
                  {" "}
                  If any of these events below happen, you will be alerted to take
                  a drink!
                </p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  {ruleList.map((rule, index) => (
                    <div key={index} className="rules contents">
                      <button className="triggerBtn" onClick={alert}>
                        <h1 className="ruleCard">{rule.name}</h1>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>}

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
