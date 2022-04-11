import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import RuleForm from "../components/RuleForm";

import { QUERY_USER, QUERY_MINE } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParas();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_MINE, {
    variables: { username: userParam },
  });

  const user = data?.mine || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/mine" />;
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
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

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

export default Profile;
