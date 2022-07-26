/* eslint-disable react/prop-types */
import Context from "./context";
import useGlobalState from "./globalstate";

const GlobalStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  );
};

export default GlobalStateProvider;
