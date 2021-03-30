import {REQUEST_GROUP_LIST, RESPONSE_GROUP_LIST} from "./actionTypes"

const fetchingGroup = () => ({
    type: REQUEST_GROUP_LIST,
    payload: {}
})

const groupReceived = (body) => ({
    type: RESPONSE_GROUP_LIST,
    payload: {
        body: body
    }
})

export {
    fetchingGroup,
    groupReceived
}
