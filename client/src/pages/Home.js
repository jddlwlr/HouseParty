import React from "react";
import { useQuery } from "@apollo/client";

import User from "../components/User";
import Party from "../components/Party";
import Live from "../components/Live";

import { QUERY_RULE } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_RULE);
  const rules = data?.rules || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3"></div>
      </div>
    </main>
  );
};
