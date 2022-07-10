import { combineReducers } from "redux";
import userUserReducer from "./user/user.reducer";

export default combineReducers({
  user: userUserReducer,
});
