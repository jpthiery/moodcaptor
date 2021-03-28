
import {gotoStats} from "../../redux/nav.actions";
import {toast} from "react-toastify";

export const submitMood = (groupId, day, rate) => dispatch => {

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
            dispatch(gotoStats)
            toast.info(`Your mood had been submitted.`, {
                position: "bottom-center",
                type: "info",
                autoClose: 5000
            });
        })
}
