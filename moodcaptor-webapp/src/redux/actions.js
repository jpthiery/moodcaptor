import {
    GROUP_SELECTED,
    MOOD_LEVEL_SELECTED
} from "./actionTypes"

export const moodLevelSelected = (level) => ({
    type: MOOD_LEVEL_SELECTED,
    payload: level
})

export const groupSelected = (groupId) => ({
    type: GROUP_SELECTED,
    payload: groupId
})