import React, { useContext, useState } from "react";
import { Context } from "../utils/GlobalState";
import { useQuery } from "@apollo/client";

import { QUERY_PARTY } from "../utils/queries";

const Foul = (props) => {
  //   const [formState, setFormState] = useState({ name: "", partyId: "" });
  //   const [addRule, { error }] = useMutation(ADD_RULE);
  const [state, setState] = useContext(Context);

  const { loading, error, data } = useQuery(QUERY_PARTY, {
    variables: { id: state.partyId },
  });
  if (loading) return "Loading";
  if (error) return `${error.message}`;

  //   console.log(data.party.rules);

  const ruleList = data?.party.rules || [];

  const listRules = ruleList.map((rule) => <button>{rule.name}</button>);

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     console.log(state.userId);
  //     try {
  //       const mutationResponse = await addRule({
  //         variables: { name: formState.name, partyId: state.partyId },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     }):
  return <>{state.new === true ? <div>{listRules}</div> : <div></div>}</>;
};

export default Foul;
