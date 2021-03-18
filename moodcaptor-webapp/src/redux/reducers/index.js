import {combineReducers} from "redux";
import survey from "./survey";
import groups from "./groups"

export default combineReducers({
    survey,
    groups
});
