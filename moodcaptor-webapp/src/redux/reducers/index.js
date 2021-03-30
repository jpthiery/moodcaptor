import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router'
import groups from "./groups"
import nav from "./nav";

const reducers = (history) => combineReducers({
    groups,
    nav,
    router: connectRouter(history),
});
export default reducers