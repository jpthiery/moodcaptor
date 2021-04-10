import {gotoHome, gotoStats, gotoStatsGroup} from "../../redux/nav.actions";
import {groupSelected, timeRangeSelected} from "../../redux/survey.actions";
import {batch} from "react-redux";
import {convertDateToString} from "../../date_utils";

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

export const timeRangeChanged = (start, end) => dispatch => {
    const startDate = convertDateToString(start)
    const endDate = convertDateToString(end)
    dispatch(timeRangeSelected(startDate, endDate))
}