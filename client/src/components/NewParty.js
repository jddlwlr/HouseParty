import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Context } from "../utils/GlobalState";

import { ADD_PARTY } from "../utils/mutations";
// import { QUERY_RULE, QUERY_MINE } from "../utils/queries";

import Auth from "../utils/auth";

const NewParty = (props) => {
  const [formState, setFormState] = useState({ name: "" });
  const [newParty, { error }] = useMutation(ADD_PARTY);
  const [state, setState] = useContext(Context);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await newParty({
        variables: { name: formState.name },
      });
      const partyNum = mutationResponse.data.addParty._id;
      setState({ partyId: partyNum });
      console.log(state.userId);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  if (state.new !== true) {
    return null;
  }

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            id="#newParty"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9 " id="createParty">
              <h1>Create a new Party </h1>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Party Name"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-lg-3" id="partyBtn">
              <button className=" py-3" type="submit">
                Add Party
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          Please login to add your party foul trigger. You can{" "}
          <Link to="/signin">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default NewParty;
