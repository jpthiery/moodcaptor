import {RESPONSE_GROUP_LIST} from "../actionTypes";


const initialState = {
    existing: []
}

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case RESPONSE_GROUP_LIST:
            const payload = action.payload
            const groups = payload.body
            return {
                ...state,
                'existing': groups
            }
        default:
            return state
    }
}

export default reduce
