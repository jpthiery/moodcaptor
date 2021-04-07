import React from "react";
import StatsMoodPie from "./StatsMoodPie";

export default {
    title: "Design/Atome/StatsMoodPie",
    component: StatsMoodPie
}

const Template = (args) => <div style={{width: '100%', height: 300}}>
    <StatsMoodPie {...args}  />
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

const data = {
    votes: [
        {rate: 1, nbVotes: 1},
        {rate: 2, nbVotes: 4},
        {rate: 3, nbVotes: 8},
        {rate: 4, nbVotes: 6},
        {rate: 5, nbVotes: 1}
    ],
    avg: 3.23
}

export const OneWeekStatsGraph = Template.bind({})

OneWeekStatsGraph.args = {
    data: data,
    configSurvey: config,
    avgColor: "#542188"
}
