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
    return getCurrentSurveyDataForGroup(store, group)
}

export const getCurrentSurveyDataForGroup = (store, groupId) => {
    const beginStr = currentBegin(store);
    const endStr = currentEnd(store);
    const result = surveyForGroup(store, groupId);
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