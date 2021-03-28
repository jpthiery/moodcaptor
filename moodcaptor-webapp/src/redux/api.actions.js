import {fetchingGroup, groupReceived} from "./groups.actions";


const fetchGroups = () => dispatch => {
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
                    dispatch(groupReceived(json))
                })
        })
}
export {
    fetchGroups
}