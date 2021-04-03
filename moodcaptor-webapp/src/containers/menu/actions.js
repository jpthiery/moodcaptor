import {gotoStats, gotoHome} from "../../redux/nav.actions";

export const home = () => dispatch => {
    dispatch(gotoHome)
}

export const stats = () => dispatch => {
    dispatch(gotoStats)
}
