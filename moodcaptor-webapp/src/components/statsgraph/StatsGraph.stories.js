import React from "react";
import StatsGraph from "./StatsGraph";

export default {
    title: "StatsGraph",
    component: StatsGraph,
    argTypes: {
        voteColor: {
            control: {
                type: "color"
            }
        },
        moodColor: {
            control: {
                type: "color"
            }
        }
    }
}

const Template = (args) => <div style={{width: '100%', height: 300}}>
    <StatsGraph {...args}  />
</div>

const colors = [
    "#bc2323",
    "#e97210",
    "#2091b7",
    "#dab80c",
    "#4fcd7e"
];

const data = [
    {
        date: '01/03/2021',
        votes: [
            1,
            2,
            6,
            8,
            1
        ]
    },
    {
        date: '02/03/2021',
        votes: [
            2,
            3,
            8,
            2,
            0
        ]
    },
    {
        date: '03/03/2021',
        votes: [
            0,
            0,
            0,
            0,
            9
        ]
    },
    {
        date: '04/03/2021',
        votes: [
            0,
            2,
            10,
            4,
            0
        ]
    },
    {
        date: '05/03/2021',
        votes: [
            1,
            2,
            3,
            10,
            2
        ]
    }
];

export const OneWeekStatsGraph = Template.bind({})

OneWeekStatsGraph.args = {
    data: data,
    votesColors: colors
}
