import {GROUP_SELECTED, RESPONSE_SURVEY} from "./actionTypes"

const surveyReceived = (begin, end, groupId, body) => ({
    type: RESPONSE_SURVEY,
    payload: {
        groupId: groupId,
        begin: begin,
        end: end,
        body: body
    }
})


const groupSelected = (groupId) => ({
    type: GROUP_SELECTED,
    payload:  {
        groupId: groupId
    }
})


export {
    surveyReceived,
    groupSelected
}
