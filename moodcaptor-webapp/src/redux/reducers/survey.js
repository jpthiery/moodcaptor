import {GROUP_SELECTED, RESPONSE_SURVEY} from "../actionTypes";
import {compute_avg} from "../../utils";
import {convertStringToDate} from "../../date_utils";
import DateFnsUtils from '@date-io/date-fns';

const dateFns = new DateFnsUtils()

const initialState = {
    surveys: {},
    current_group_selected: "",
    current_begin_selected: "",
    current_end_selected: ""
}

const sortByDate = votes => votes.sort((a, b) => dateFns.isBefore(
    convertStringToDate(a.date),
    convertStringToDate(b.date)
    )
)

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case RESPONSE_SURVEY:
            const {body, begin, end, groupId} = action.payload
            const dataExisting = state.surveys[groupId] || []
            const onlyNewData = body.map(entry => {
                const dataExist = dataExisting.filter(existing => existing.date === entry.date)
                if (dataExist.length > 0) {
                    return null
                }
                return {
                    ...entry,
                    avg: compute_avg(entry.votes)
                }
            }).filter(item => item)

            const data = sortByDate([...dataExisting, ...onlyNewData])

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