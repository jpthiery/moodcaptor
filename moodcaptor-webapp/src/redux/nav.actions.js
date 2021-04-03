import {push} from 'connected-react-router'

const basePath = '/function/moodcaptor-webapp/'

const forgePath = (subPath) => basePath + subPath

const gotoHome = push(basePath)
const gotoStats = push(forgePath('stats'))

export {
    gotoHome,
    gotoStats
}