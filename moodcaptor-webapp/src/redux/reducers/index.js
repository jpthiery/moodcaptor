import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import groups from "./groups"
import survey from "./survey";

const reducers = (history) => combineReducers({
    groups,
    survey,
    router: connectRouter(history),
});
export default reducers