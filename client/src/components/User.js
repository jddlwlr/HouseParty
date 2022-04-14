import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import React, { useContext } from "react";
//import username from "";
import profile from "../images/cup.jpg";
// import Store from "../utils/GlobalState";
import { Context } from "../utils/GlobalState";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";
import auth from "../utils/auth";
// import { find, findById } from "../../../server/models/Rule";
// import { assertValidSchema } from "graphql";
// import { from } from "@apollo/client";

function User() {
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

  // const userData = async () => {
  //   const userId = Auth.getProfile().data._id;
  //   console.log(userId);
  //   await user({
  //     variables: { _id: userId },
  //   });
  // };
  // userData();
  // console.log(userData);

  return (
    <section>
      {Auth.loggedIn() ? (
        <>
          <div className="container" id="user">
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
        </>
      ) : (
        <p className="userPanel">
          {" "}
          You need to be logged in play! Please <Link to="/login">
            login
          </Link>{" "}
          or <Link to="/signUp">signup.</Link>
        </p>
      )}
    </section>
  );
}

export default User;
