
import {
    fetchingGroup,
    groupReceive
} from "./actions";

export function fetchGroups() {
    return dispatch => {
        dispatch(fetchingGroup())
        fetch("/function/moodcaptor-group-request", {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => {
                response.json()
                    .then(json => {
                        console.log(json)
                        dispatch(groupReceive(json))
                    })
            })
    }
}