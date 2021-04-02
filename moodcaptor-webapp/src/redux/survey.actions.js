import {RESPONSE_SURVEY} from "./actionTypes"

const surveyReceived = (begin, end, groupId, body) => ({
    type: RESPONSE_SURVEY,
    payload: {
        groupId: groupId,
        begin: begin,
        end: end,
        body: body
    }
})

export {
    surveyReceived
}
