import React from "react";
import {mapStateToProps, MoodStats} from "./MoodStats";


import {createStore} from 'redux'
import {connect, Provider} from "react-redux";

import rootReducer from '../../redux/reducers'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const store = preloadedState => createStore(
    rootReducer(history),
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const MoodStatsConnected = connect(
    mapStateToProps,
    {}
)(MoodStats)

export default {
    title: "MoodStats",
    component: MoodStats
}

const Template = (args) =>
    <Provider store={store(args.preloadedState)}>
        <div style={{width: '100%', height: 400}}>
            <MoodStatsConnected {...args}  />
        </div>
    </Provider>

const config = [
    {
        label: "Very sad",
        color: "#bc2323"
    },
    {
        label: "Sad",
        color: "#e97210"
    },
    {
        label: "Neutral",
        color: "#2091b7"
    },
    {
        label: "Nice",
        color: "#dab80c"
    },
    {
        label: "Very happy",
        color: "#4fcd7e"
    }
]


const data = [];

export const OneWeekStatsGraph = Template.bind({})

OneWeekStatsGraph.args = {
    configSurvey: config,
    preloadedState: {
        survey: {
            surveys: {
                'azerty': [
                    {
                        date: '01/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 1},
                            {rate: 2, nbVotes: 2},
                            {rate: 3, nbVotes: 6},
                            {rate: 4, nbVotes: 8},
                            {rate: 5, nbVotes: 1}
                        ],
                        avg: 3.13
                    },
                    {
                        date: '02/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 2},
                            {rate: 2, nbVotes: 3},
                            {rate: 3, nbVotes: 8},
                            {rate: 4, nbVotes: 2},
                            {rate: 5, nbVotes: 0}
                        ],
                        avg: 3.56
                    },
                    {
                        date: '03/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 0},
                            {rate: 2, nbVotes: 0},
                            {rate: 3, nbVotes: 0},
                            {rate: 4, nbVotes: 0},
                            {rate: 5, nbVotes: 9}
                        ],
                        avg: 5
                    },
                    {
                        date: '04/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 0},
                            {rate: 2, nbVotes: 2},
                            {rate: 3, nbVotes: 10},
                            {rate: 4, nbVotes: 4},
                            {rate: 5, nbVotes: 0}
                        ],
                        avg: 3.13
                    },
                    {
                        date: '05/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 1},
                            {rate: 2, nbVotes: 2},
                            {rate: 3, nbVotes: 3},
                            {rate: 4, nbVotes: 10},
                            {rate: 5, nbVotes: 2}
                        ],
                        avg: 3.56
                    }
                ]
            },
            current_group_selected: "azerty",
            current_begin_selected: "01/03/2021",
            current_end_selected: "05/03/2021"
        }
    }
}

export const EmptyData = Template.bind({})

EmptyData.args = {
    configSurvey: config
}
