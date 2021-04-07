import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";

import MoodStats from "../../containers/moodstats/MoodStats";

import {currentBegin, currentEnd, currentGroup, getCurrentSurveyDataForGroup} from "../../redux/survey.selectors";
import {fetchSurvey} from "./actions";

export const GroupStats = ({groupId, begin, end, surveys}) => {

    console.log(`GroupStats surveys ${groupId} ->${surveys}<- ${begin} ${end}`)

    const [fetchDataRequested, requestFetchData] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        if ((surveys === undefined || surveys.length === 0) &&
            groupId &&
            !fetchDataRequested
        ) {
            fetchSurvey(
                groupId,
                begin,
                end
            )(dispatch)
            requestFetchData(true)
        }
    })


    const configSurvey = [
        {
            label: "Very sad",
            color: "#bc2323"
        },
        {
            label: "Sad",
            color: "#e97210"
        },
        {
            label: "Neutral",
            color: "#2091b7"
        },
        {
            label: "Nice",
            color: "#dab80c"
        },
        {
            label: "Very happy",
            color: "#4fcd7e"
        }
    ]

    return (
        <>
            <p>mood stats for group {begin} - {end}</p>
            <MoodStats
                configSurvey={configSurvey}
            />
        </>
    )
}

export const mapStateToProps = state => {
    const groupId = currentGroup(state)
    const begin = currentBegin(state)
    const end = currentEnd(state)
    const surveys = getCurrentSurveyDataForGroup(state, groupId)
    return {
        groupId,
        begin,
        end,
        surveys
    }
}

export default connect(
    mapStateToProps,
    {}
)(GroupStats)