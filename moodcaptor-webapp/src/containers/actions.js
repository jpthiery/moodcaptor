import {groupSelected} from "../redux/actions"

export const selectGroup = groupId => dispatch => {
    dispatch(groupSelected(groupId))
}