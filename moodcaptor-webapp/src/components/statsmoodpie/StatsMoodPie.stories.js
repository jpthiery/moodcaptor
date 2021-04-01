import React from "react";
import StatsMoodPie from "./StatsMoodPie";

export default {
    title: "StatsMoodPie",
    component: StatsMoodPie
}

const Template = (args) => <div style={{width: '100%', height: 300}}>
    <StatsMoodPie {...args}  />
</div>


const data = [
    {
        value: 1,
        name: "Very sad",
        rate: 1,
        color: "#bc2323"
    },
    {
        value: 4,
        name: "Sad",
        rate: 2,
        color: "#e97210"
    },
    {
        value: 8,
        name: "Neutral",
        rate: 3,
        color: "#2091b7"
    },
    {
        value: 6,
        name: "Nice",
        rate: 4,
        color: "#dab80c"
    },
    {
        value: 1,
        name: "Very happy",
        rate: 5,
        color: "#4fcd7e"
    }
];

export const OneWeekStatsGraph = Template.bind({})

OneWeekStatsGraph.args = {
    data: data
}
