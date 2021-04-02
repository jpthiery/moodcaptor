import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import groups from "./groups"
import nav from "./nav";
import survey from "./survey";

const reducers = (history) => combineReducers({
    groups,
    nav,
    survey,
    router: connectRouter(history),
});
export default reducers