import {fetchingGroup, groupReceived} from "./groups.actions";
import {surveyReceived} from "./survey.actions";


const forgeUrl = (path) => `/function/${path}`
const applicationJson = 'application/json'

const fetchGroups = () => dispatch => {
    dispatch(fetchingGroup())
    fetch(forgeUrl("moodcaptor-group-request"), {
        method: 'GET',
        headers: {
            Accept: applicationJson
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

const lookupSurvey = (begin, end, groupId) => dispatch => {
// TODO: Call the API

    const symulateApiCall = async () => {

        setTimeout(function(){
            console.log('lookupSurvey')
            const data = [
                {
                    date: '01/03/2021',
                    votes: [
                        {rate: 1, nbVotes: 1},
                        {rate: 2, nbVotes: 2},
                        {rate: 3, nbVotes: 6},
                        {rate: 4, nbVotes: 8},
                        {rate: 5, nbVotes: 1}
                    ]
                },
                {
                    date: '02/03/2021',
                    votes: [
                        {rate: 1, nbVotes: 2},
                        {rate: 2, nbVotes: 3},
                        {rate: 3, nbVotes: 8},
                        {rate: 4, nbVotes: 2},
                        {rate: 5, nbVotes: 0}
                    ]
                },
                {
                    date: '03/03/2021',
                    votes: [
                        {rate: 1, nbVotes: 0},
                        {rate: 2, nbVotes: 0},
                        {rate: 3, nbVotes: 0},
                        {rate: 4, nbVotes: 0},
                        {rate: 5, nbVotes: 9}
                    ]
                },
                {
                    date: '04/03/2021',
                    votes: [
                        {rate: 1, nbVotes: 0},
                        {rate: 2, nbVotes: 2},
                        {rate: 3, nbVotes: 10},
                        {rate: 4, nbVotes: 4},
                        {rate: 5, nbVotes: 0}
                    ]
                },
                {
                    date: '05/03/2021',
                    votes: [
                        {rate: 1, nbVotes: 1},
                        {rate: 2, nbVotes: 2},
                        {rate: 3, nbVotes: 3},
                        {rate: 4, nbVotes: 10},
                        {rate: 5, nbVotes: 2}
                    ]
                }
            ];
            dispatch(surveyReceived('01/03/2021', '05/03/2021', groupId, data))
        }, 5000);

    }
    symulateApiCall().catch(e => console.log(e))
}


export {
    fetchGroups,
    lookupSurvey
}