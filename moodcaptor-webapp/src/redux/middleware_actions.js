
import {
    fetchingGroup,
    groupReceive
} from "./actions";

export function fetchGroups() {
    return dispatch => {
        dispatch(fetchingGroup())
        fetch("/groups", {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => {
                response.json()
                    .then(json => {
                        dispatch(groupReceive(json))
                    })
            })
    }
}