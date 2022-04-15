import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Context } from "../utils/GlobalState";
import Foul from "./Foul";

import { ADD_RULE } from "../utils/mutations";
// import { QUERY_RULE, QUERY_MINE } from "../utils/queries";

import Auth from "../utils/auth";

const RuleForm = () => {
  const [formState, setFormState] = useState({ name: "", partyId: "" });
  const [addRule, { error }] = useMutation(ADD_RULE);
  const [state, setState] = useContext(Context);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addRule({
        variables: { name: formState.name, partyId: state.currentParty.id },
      });

      const newRule = data.addRule;
      const oldRules = state.currentParty.rules || [];
      setState(
        {
          ...state,
          currentParty: {
            ...state.currentParty,
            rules: oldRules.concat(newRule)
          }
        }
      )

      console.log("addRule", data)
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
  
  return (
    <div>
      <h2>Please enter your trigger foul!</h2>

      {Auth.loggedIn() ? (
        <>
          {state.currentParty === null ? <div></div> : <Foul />}
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            id="foulContainer"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                tpye="text"
                name="name"
                id="name"
                placeholder="Enter your game foul..."
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Foul
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

export default RuleForm;
