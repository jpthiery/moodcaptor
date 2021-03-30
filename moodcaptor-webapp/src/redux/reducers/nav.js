import {NAVIGATE_RESET, NAVIGATE_TO} from "../actionTypes";


const initialState = {
    redirectTo: ""
}

const reduce =  (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE_TO:
            const payload = action.payload
            const redirectTo = payload.redirectTo
            return {
                ...state,
                redirectTo: redirectTo
            }
        case NAVIGATE_RESET:
            return {
                ...state,
                redirectTo: ""
            }
        default:
            return state
    }
}

export default reduce