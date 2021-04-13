import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';

import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

import Group from "../../components/group/Group";
import TimeRange from "../../components/timerange/TimeRange";
import Language from "../../components/language/Language";

import {home, stats, statsGroup, timeRangeChanged} from "./actions"

import {existingGroups} from "../../redux/groups.selectors";
import {currentBegin, currentEnd, currentGroup} from "../../redux/survey.selectors";
import {changeToNextLanguage, useLanguageAvailable} from "../../translations";

export const MenuTop = ({
                            groupSelectable,
                            groupSelected,
                            startDate,
                            endDate,
                            gotoStats,
                            gotoHome,
                            gotoStatsGroup,
                            timeRangeChanged
                        }) => {

    const groupInput = (groupSelectable !== undefined && groupSelectable.length > 0) ?
        <Group
            groups={groupSelectable}
            initialGroupSelected={groupSelected}
            groupSelected={groupId => gotoStatsGroup(groupId)}
        /> :
        null

    const flipLanguage = () => changeToNextLanguage()

    return (
        <AppBar position="static" style={{marginBottom: '10px'}}>
            <Toolbar>
                <IconButton edge={"start"} color="inherit">
                    <HomeIcon onClick={e => gotoHome()}/>
                </IconButton>
                <IconButton edge={"start"} color="inherit">
                    <TimelineIcon onClick={e => gotoStats()}/>
                </IconButton>
                <Typography variant={"h6"} color={"inherit"}>
                    MoodCaptor
                </Typography>
                {groupInput}
                <TimeRange
                    startDateSelected={startDate}
                    endDateSelected={endDate}
                    timeRangeChanged={(start, end) => timeRangeChanged(start, end)}
                />
                <Language flipLanguage={flipLanguage} initialLanguage={useLanguageAvailable()} />
            </Toolbar>
        </AppBar>
    )
}
export const mapStateToProps = state => {
    const groupSelectable = existingGroups(state)
    const groupSelected = currentGroup(state)
    const startDate = currentBegin(state)
    const endDate = currentEnd(state)
    return {
        groupSelectable,
        groupSelected,
        startDate,
        endDate
    }
}

export default connect(
    mapStateToProps,
    {
        gotoStats: stats,
        gotoHome: home,
        gotoStatsGroup: statsGroup,
        timeRangeChanged
    }
)(MenuTop)