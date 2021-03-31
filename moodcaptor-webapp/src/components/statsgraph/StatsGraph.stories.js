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


const data = [
    {
        date: '01/03/2021',
        nbVote: 4,
        averageMood: 2.1
    },
    {
        date: '02/03/2021',
        nbVote: 8,
        averageMood: 3.8
    },
    {
        date: '03/03/2021',
        nbVote: 2,
        averageMood: 2.5
    },
    {
        date: '04/03/2021',
        nbVote: 6,
        averageMood: 4
    },
    {
        date: '05/03/2021',
        nbVote: 5,
        averageMood: 3.3
    }
];

export const OneWeekStatsGraph = Template.bind({})

OneWeekStatsGraph.args = {
    data: data
}
