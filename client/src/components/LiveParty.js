import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { users } from "../users";
import { rules } from "../rules";
import profile from "../images/profile.png";

import { QUERY_USER } from "../utils/queries";
import { QUERY_PARTY } from "../utils/queries";
import { Context } from "../utils/GlobalState";

import Auth from "../utils/auth";
import RuleForm from "./RuleForm";
import auth from "../utils/auth";

export default function LiveParty() {
  const { partyName: partyParam } = useParams();

  const { loading1, data1 } = useQuery(partyParam ? QUERY_PARTY : QUERY_USER, {
    variables: { partyName: partyParam },
  });

  const party = data1?.party || data1?.users || {};

  // eslint-disable-next-line no-undef
  const [state, setState] = useContext(Context);

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { id: auth.getProfile().data._id },
  });

  const partyClick = (id, e) => {
    setState({
      ...state,
      partyId: id,
      new: false,
    });
    console.log(state);
  };
  console.log(state);
  const partyList = data?.user.parties || [];

  const listParties = partyList.map((party) => (
    <button onClick={(e) => partyClick(party._id, e)}>{party.name}</button>
  ));

  const handleClick = () => {
    setState({
      ...state,
      new: true,
      partyId: "",
    });
  };

  if (Auth.loggedIn() && Auth.getLiveParty().data1.partyName === partyParam) {
    return <Navigate to="party" />;
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

  if (!party?.partyName) {
    return (
      <h3>
        You need to be logged in to view live parties. Please log in or sign up!
      </h3>
    );
  }

  return (
    <div className="task-manager">
      <div className="left-bar">
        <div className="left-content"></div>
        <div>
          <img src={profile} alt="profile pic" className="profilePic" />
          <h3 className="username">{auth.getProfile().data.username}</h3>

          <h2 className="updates">Upcoming/Live Parties</h2>
          <div>
            <ul className="action-list">
              <li className="item">
                <a href="#invites">My Invites</a>
              </li>
              <li className="item">
                <button onClick={handleClick}>New Party</button>
              </li>
              <li className="item">
                <a href="#myParties">My Parties</a>
                {listParties}
              </li>
              <li className="item">
                <a href="#recentParties">Recent Parties</a>
              </li>
              <li className="item">
                <a href="#friends">My Friends</a>
              </li>
              <li className="item">
                <a href="#logout" onClick={Auth.logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* center of dashboard*/}

        <div className="page-content">
          <h2>House Party</h2>
          <p>
            {" "}
            If any of these events below happen, you will be alerted to take a
            drink!
          </p>
          {/* game play container*/}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* card for trigger*/}

            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
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
        <div className="right-content">
          <div>
            <h2 id="liveParty">Live Party</h2>
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
      </div>
      <div></div>
      <div className="right-bar">
        <div className="top-part"></div>
        <RuleForm />
      </div>
    </div>
  );
}
