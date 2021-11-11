//combine reducers

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//function met object erin --> mag zelf naam verzinnen
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;