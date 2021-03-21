import {moodSubmitted} from "../../redux/actions";

export const submitMood = (groupId, day, rate) => dispatch => {
    moodSubmitted(groupId, day, rate)
    fetch(`/function/moodcaptor-submit`, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        groupId: groupId,
        date: day,
        rate: rate
    })
})
    .then(res => res.json())
    .then(res => {
        dispatch(moodSubmitted(groupId, day, rate))
    })

}