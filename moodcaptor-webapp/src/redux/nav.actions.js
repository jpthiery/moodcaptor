import {push} from 'connected-react-router'

const basePath = '/function/moodcaptor-webapp/'

const forgePath = (subPath) => basePath + subPath

const gotoHome = push(basePath)
const gotoStats = push(forgePath('stats'))
const gotoStatsGroup = (groupId) => push(forgePath(`${groupId}/stats`))

export {
    gotoHome,
    gotoStats,
    gotoStatsGroup
}