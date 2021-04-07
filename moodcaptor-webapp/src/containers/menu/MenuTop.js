import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';

import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

import Group from "../../components/group/Group";

import {home, stats, statsGroup} from "./actions"

import {existingGroups} from "../../redux/groups.selectors";
import {currentGroup} from "../../redux/survey.selectors";

export const MenuTop = ({groupSelectable, groupSelected, gotoStats, gotoHome, gotoStatsGroup}) => {

    const groupInput = (groupSelectable !== undefined && groupSelectable.length > 0) ?
        <Group
            groups={groupSelectable}
            initialGroupSelected={groupSelected}
            groupSelected={groupId => gotoStatsGroup(groupId)}
        /> :
        null

    return (
        <AppBar position="static" style={{marginBottom: '10px'}}>
            <Toolbar>
                <IconButton
                    edge={"start"}
                >
                    <HomeIcon
                        onClick={e => gotoHome()}
                    />
                </IconButton>
                <IconButton
                    edge={"start"}
                >
                    <TimelineIcon
                        onClick={e => gotoStats()}
                    />
                </IconButton>
                <Typography variant={"h6"}>
                    MoodCaptor
                </Typography>
                {groupInput}
            </Toolbar>
        </AppBar>
    )
}
export const mapStateToProps = state => {
    const groupSelectable = existingGroups(state)
    const groupSelected = currentGroup(state)
    return {
        groupSelectable,
        groupSelected
    }
}

export default connect(
    mapStateToProps,
    {
        gotoStats: stats,
        gotoHome: home,
        gotoStatsGroup: statsGroup
    }
)(MenuTop)