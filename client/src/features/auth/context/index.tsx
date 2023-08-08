import { createContext, useContext, useReducer } from "react";
import { AuthContextStateType, UserInterface } from "./types";

const intialState = { user: null };

const AuthContext = createContext<AuthContextStateType | null>(null);

const ACTIONS = {
  LOGIN: "login",
  LOGOUT: "logout",
};

const authReducer = (state: AuthContextStateType, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.LOGIN:
      return { ...state, ...payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null };
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, intialState);

  const login = (user: UserInterface) => {
    dispatch({ type: ACTIONS.LOGIN, payload: { user } });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const values = {
    state,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      `Error: auth context is undefined, make sure you wrapped your component with the AuthProvider`
    );
  }

  return context;
};

export default AuthProvider;
