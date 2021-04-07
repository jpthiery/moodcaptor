import {GROUP_SELECTED, RESPONSE_SURVEY} from "../actionTypes";
import {compute_avg} from "../../utils";

const initialState = {
    surveys: {},
    current_group_selected: "",
    current_begin_selected: "",
    current_end_selected: ""
}


const reduce = (state = initialState, action) => {
    switch (action.type) {
        case RESPONSE_SURVEY:
            const {body, begin, end, groupId} = action.payload
            const data = body.map(entry => {
                return {
                    ...entry,
                    avg: compute_avg(entry.votes)
                }
            })
            return {
                ...state,
                surveys: {
                    ...state.surveys,
                    [groupId]: data
                },
                current_begin_selected: begin,
                current_end_selected: end,
            }
        case GROUP_SELECTED:
            const groupIdSelected = action.payload.groupId
            return {
                ...state,
                current_group_selected: groupIdSelected
            }
        default:
            return state
    }
}

export default reduce