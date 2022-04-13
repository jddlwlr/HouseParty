import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Context } from "../utils/GlobalState";

import { ADD_PARTY } from "../utils/mutations";
// import { QUERY_RULE, QUERY_MINE } from "../utils/queries";

import Auth from "../utils/auth";

const NewParty = (props) => {
  // const [ruleText, setRuleText] = useState("");

  // const [addRule, { error }] = useMutation(RULE, {
  //   update(cache, { data: { addRule } }) {
  //     try {
  //       const { rules } = cache.readQuery({ query: QUERY_RULE });

  //       cache.writeQuery({
  //         query: QUERY_RULE,
  //         data: { rules: [addRule, ...rules] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // need a me object to update cache with new rules

  //     const { mine } = cache.readQuery({ query: QUERY_MINE });
  //     cache.writeQuery({
  //       query: QUERY_MINE,
  //       data: { mine: { ...mine, rules: [...mine.rules, addRule] } },
  //     });
  //   },
  // });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addRule({
  //       variables: {
  //         ruleText,
  //       },
  //     });

  //     setRuleText("");
  //   } catch (err) {
  //     console.err(err);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { foul, value } = event.target;

  //   if (foul === "ruleText" && value.length <= 200) {
  //     setRuleText(value);
  //     setLetterCount(value.length);
  //   }
  // };

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

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <h1>Create a new Party</h1>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Party Name"
                onChange={handleChange}
              />
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

export default NewParty;
