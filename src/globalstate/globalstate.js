import { useReducer } from "react";

const reducer = (state, newValue) => {
  const newState = {
    ...state,
    ...newValue,
  };
  return newState;
};

const initialState = {
    test: 'testGlobalState'
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);
  return { globalState, globalDispatch };
};

export default useGlobalState;
