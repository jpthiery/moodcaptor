import {lookupSurvey} from "../../redux/api.actions";

export const fetchSurvey = (groupId, begin, end) => dispatch => {
    dispatch({
            type: 'debug/fetchSurvey',
            payload: {
                begin,
                end,
                groupId
            }
        }
    )

    lookupSurvey(
        begin,
        end,
        groupId
    )(dispatch)

}