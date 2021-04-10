import DateFnsAdapter from "@date-io/date-fns";
import {createSelector} from "reselect";

const dateFormat = "dd/MM/yyyy"

const defaultSurveyData = []
const dateFns = new DateFnsAdapter()

export const survey = store => store.survey
export const surveyData = createSelector(
    survey,
    data => data.surveys
)

export const currentGroup = store => survey(store).current_group_selected
export const currentBegin = store => survey(store).current_begin_selected
export const currentEnd = store => survey(store).current_end_selected

export const surveyForCurrentGroup = createSelector(
    currentGroup,
    surveyData,
    (groupId, data) => data[groupId] || defaultSurveyData
)

const filterResult = (beginStr, endStr, result) => {
    if (beginStr.length > 0 && endStr.length > 0) {
        const begin = dateFns.parse(beginStr, dateFormat)
        const end = dateFns.parse(endStr, dateFormat)
        return result.filter(entry => {
            const dateEntry = dateFns.parse(entry.date, dateFormat)
            return dateFns.isBefore(dateFns.addDays(begin, -1), dateEntry) &&
                dateFns.isBefore(dateEntry, dateFns.addDays(end, 1))
        })

    }
    return result
}

export const getCurrentSurveyData = createSelector(
    currentBegin,
    currentEnd,
    surveyForCurrentGroup,
    (beginStr, endStr, result) => {
        return filterResult(beginStr, endStr, result)
    }
)
