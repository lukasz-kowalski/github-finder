import { SET_ALERT, REMOVE_ALERT } from "../actionTypes";
import { AlertStateType, AlertActionTypes } from "../types/interfaces";

const alertReducer = (state: AlertStateType, action: AlertActionTypes) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;
