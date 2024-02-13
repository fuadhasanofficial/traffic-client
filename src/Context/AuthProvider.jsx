/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, trafiicReducer } from "../Reducer/traficReducer";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafiicReducer, initialState);
  const user = {
    name: "fuad",
    age: 18,
  };
  const authInfo = { user, state, dispatch };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
