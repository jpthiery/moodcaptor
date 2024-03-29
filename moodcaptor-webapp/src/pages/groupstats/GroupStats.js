import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import MoodStats from "../../containers/moodstats/MoodStats";

import translate from "../../translations";

import {currentBegin, currentEnd, getCurrentSurveyData} from "../../redux/survey.selectors";
import {fetchSurvey} from "./actions";
import {convertStringToDate} from "../../date_utils";
import DateFnsUtils from "@date-io/date-fns";

const dateFns = new DateFnsUtils()


export const surveyMustBeFetch = (groupId, begin, end, surveyResult, fetchDataRequested) => {

    if (
        (surveyResult === undefined || surveyResult.length === 0) &&
        !fetchDataRequested) {
        return true
    }
    if (fetchDataRequested) return false
    if (groupId) {
        const beginResult = convertStringToDate(surveyResult[0].date)
        const endResult = convertStringToDate(surveyResult[surveyResult.length - 1].date)
        const beginExpected = convertStringToDate(begin)
        const endExpected = convertStringToDate(end)
        return dateFns.isAfter(beginResult, beginExpected) ||
            dateFns.isBefore(endResult, endExpected)
    }
    return false
}

export const GroupStats = ({groupId, begin, end, surveys, fetchSurvey}) => {

    const [fetchDataRequested, requestFetchData] = useState(false)

    useEffect(() => {
        const mustBeFetch = surveyMustBeFetch(groupId, begin, end, surveys, fetchDataRequested)
        if (mustBeFetch) {
            requestFetchData(true)
            fetchSurvey(
                groupId,
                begin,
                end
            )
        }
    }, [groupId, begin, end, surveys, fetchDataRequested, fetchSurvey])

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

    const t = translate.use().GroupStats

    return (
        <>
            <p>{t.statsHeader(begin, end)}</p>
            <MoodStats
                configSurvey={configSurvey}
            />
        </>
    )
}

export const mapStateToProps = state => {
    const begin = currentBegin(state)
    const end = currentEnd(state)
    const surveys = getCurrentSurveyData(state)
    return {
        begin,
        end,
        surveys
    }
}

export default connect(
    mapStateToProps,
    {fetchSurvey}
)(GroupStats)

