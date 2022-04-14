import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import RuleForm from "../components/RuleForm";

import { QUERY_USER, QUERY_MINE } from "../utils/queries";

import Auth from "../utils/auth";

const LiveParty = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_MINE, {
    variables: { username: userParam },
  });

  const user = data?.mine || data?.user || {};

  if (Auth.loggedIn() && Auth.getLiveParty().data.username === userParam) {
    return <Navigate to="/liveparty" />;
  }

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

  if (!user?.username) {
    return (
      <h3>
        Please login to access this area. Use the links above to login or
        signup!
      </h3>
    );
  }
  return (
    <div>
      <div className="flex-row justify-center mb-3">
       <div className="page-content">
           <LiveParty />
           </div>

        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <RuleForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveParty;
