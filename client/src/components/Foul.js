import React, { useContext, useState } from "react";
import { Context } from "../utils/GlobalState";
import { useQuery } from "@apollo/client";

import { QUERY_PARTY } from "../utils/queries";

const Foul = () => {
  const [state, setState] = useContext(Context);

  const { loading, error, data } = useQuery(QUERY_PARTY, {
    variables: { id: state.partyId },
  });
  if (loading) return "Loading";
  if (error) return `${error.message}`;

  //   console.log(data.party.rules);

  const ruleList = data?.party.rules || [];

  const listRules = ruleList.map((rule) => (
    <button key={rule.id}>{rule.name}</button>
  ));

  return (
    <>
      {" "}
      <div>{listRules}</div>
    </>
  );
};

export default Foul;
