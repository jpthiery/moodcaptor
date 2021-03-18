import {GROUP_SELECTED} from "../actionTypes";

const initialState = {
    groupId: "",
    moodLevel: 3,
    comment: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GROUP_SELECTED:
            const groupId = action.payload
            return {
                ...state,
                groupId: groupId
            }
        default:
            return state
    }
}