export const survey = store => store.survey

const defaultSurveyData = []

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
    const begin = currentBegin(store)
    const end = currentEnd(store)
    return surveyForGroup(store, group)
        .filter((key, item) => key === group)
        .filter((key, item) => begin >= item.date >= end)
}