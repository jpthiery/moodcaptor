import {
    MOOD_SUBMITTED,
    REQUEST_GROUP_LIST,
    RESPONSE_GROUP_LIST
} from "./actionTypes"

export const fetchingGroup = () => ({
    type: REQUEST_GROUP_LIST,
    payload: {}
})

export const groupReceive = ( body) => ({
    type: RESPONSE_GROUP_LIST,
    payload: {
        body: body
    }
})

export const moodSubmitted = (groupId, date, rate) => ({
    type: MOOD_SUBMITTED,
    payload: {
        groupId: groupId,
        date: date,
        rate: rate
    }
})