import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';

import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

import {home, stats} from "./actions"

const MenuTop = ({gotoStats, gotoHome}) => {

    return (
        <AppBar position="static">
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
                    Coucou
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    {
        gotoStats: stats,
        gotoHome: home
    }
)(MenuTop)