import {gotoHome, gotoStats, gotoStatsGroup} from "../../redux/nav.actions";
import {groupSelected} from "../../redux/survey.actions";
import {batch} from "react-redux";

export const home = () => dispatch => {
    dispatch(gotoHome)
}

export const stats = () => dispatch => {
    dispatch(gotoStats)
}

export const statsGroup = (groupId) => dispatch => {
    batch(() => {
        dispatch(groupSelected(groupId))
        dispatch(gotoStatsGroup(groupId))
    })
}

