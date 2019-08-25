import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../../actionTypes";
import AlertContext from "./AlertContext";
import alertReducer from "../../reducers/alertReducer";

interface IProps {
  children: React.ReactNode;
}

const AlertState: React.FC<IProps> = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message: string, type: string) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
