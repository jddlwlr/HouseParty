import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_RULE } from "..//";
import { QUERY_RULE, QUERY_MINE } from "../utils/queries";

import Auth from "../utils/auth";

const RuleForm = () => {
  const [ruleText, setRuleText] = useState("");

  const [addRule, { error }] = useMutation(ADD_RULE, {
    update(cache, { data: { addRule } }) {
      try {
        const { rules } = cache.readQuery({ query: QUERY_RULE });

        cache.writeQuery({
          query: QUERY_RULE,
          data: { rules: [addRule, ...rules] },
        });
      } catch (e) {
        console.error(e);
      }

      // need a me object to update cache with new rules

      const { mine } = cache.readQuery({ query: QUERY_MINE });
      cache.writeQuery({
        query: QUERY_MINE,
        data: { mine: { ...mine, rules: [...mine.rules, addRule] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addRule({
        variables: {
          ruleText,
        },
      });

      setRuleText("");
    } catch (err) {
      console.err(err);
    }
  };

  const handleChange = (event) => {
    const { foul, value } = event.target;

    if (foul === "ruleText" && value.length <= 200) {
      setRuleText(value);
      setLetterCount(value.length);
    }
  };

  return (
    <div>
      <h2>Please type your trigger rule!</h2>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="ruleText"
                placeholder="Enter your game foul..."
                value={ruleText}
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
          Please login to add your part foul trigger. You can{" "}
          <Link to="/signin">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default RuleForm;
