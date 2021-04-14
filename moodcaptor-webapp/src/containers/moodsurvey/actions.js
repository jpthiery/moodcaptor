import {gotoStats} from "../../redux/nav.actions";
import {toast} from "react-toastify";
import translate from "../../translations";

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
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            }
            return res.json()
        })
        .then(res => {
            dispatch(gotoStats)
        })
        .catch(reason => {
            const t = translate.translations.SurveyForm
            toast.error( t.submitError(reason), {
                position: "bottom-center",
                type: "error",
                autoClose: 5000
            });
        })
}
