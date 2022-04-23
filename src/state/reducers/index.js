import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const Reducers = combineReducers({
  user: UserReducer,
});
export default Reducers;
