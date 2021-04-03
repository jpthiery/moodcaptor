
import DateFnsAdapter from "@date-io/date-fns";

const dateFormat = "dd/MM/yyyy"

export const survey = store => store.survey

const defaultSurveyData = []
const dateFns = new DateFnsAdapter()

export const currentGroup = store => survey(store).current_group_selected
export const currentBegin = store => survey(store).current_begin_selected
export const currentEnd = store => survey(store).current_end_selected
export const surveyForGroup = (store, groupId) => {
    if (groupId) {
        return survey(store).surveys[groupId] || defaultSurveyData
    }
    return defaultSurveyData
}

export const getCurrentSurveyData = store => {
    const group = currentGroup(store)
    const begin = dateFns.parse(currentBegin(store), dateFormat)
    const end = dateFns.parse(currentEnd(store), dateFormat)
    return surveyForGroup(store, group)
        .filter(entry => begin <= dateFns.parse(entry.date, dateFormat) <= end)
}