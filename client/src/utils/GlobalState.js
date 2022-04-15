import React, { useState } from "react";

const initalState = {
  new: false,
  partyId: "",
  currentParty: null,
  userId: "",
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initalState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
