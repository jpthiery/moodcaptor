import {RESPONSE_GROUP_LIST} from "../actionTypes";


const initialState = {
    existing: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case RESPONSE_GROUP_LIST:
            const groups = action.payload
            return {
                ...state,
                'existing': groups
            }
        default:
            return state
    }
}
