import React from "react";
import MoodStats from "./MoodStats";

export default {
    title: "MoodStats",
    component: MoodStats
}

const Template = (args) => <div style={{width: '100%', height: 400}}>
    <MoodStats {...args}  />
</div>

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

export const OneWeekStatsGraph = Template.bind({})

OneWeekStatsGraph.args = {
    beginDate: '01/03/2021',
    endDate: '05/03/2021',
    data: data,
    configSurvey: config
}
