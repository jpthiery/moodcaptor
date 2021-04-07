import {lookupSurvey} from "../../redux/api.actions";

export const fetchSurvey = (groupId, begin, end) => dispatch => {
    dispatch({
        type: 'debug/fetchSurvey',
        payload: {}
        }
    )

    lookupSurvey(
        begin,
        end,
        groupId
    )(dispatch)

}