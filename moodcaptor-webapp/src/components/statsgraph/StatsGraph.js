import React from "react";
import PropTypes from 'prop-types';

import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Label,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';


const StatsGraph = ({
                        data,
                        votesColors,
                        moodColor = "#ff7300"
                    }) => {

    const compute_avg = votes => {
        const coefficient = votes.reduce((a, b) => a + b, 0)
        const values = votes.map((item, index) => item * (index+1))
            .reduce((a, b) => a + b, 0)
        return values / coefficient
    }

    const computed_data = data.map(entry => {
        return {
            ...entry,
            avg: compute_avg(entry.votes)
        }
    })

    const first_entry = computed_data[0]

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                data={computed_data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5"/>
                <XAxis
                    dataKey="date"
                    scale="band"
                    style={{
                        fontSize: '1rem',
                        fontFamily: 'Times New Roman',
                    }}
                />
                <YAxis
                    style={{
                        fontSize: '1rem',
                        fontFamily: 'Times New Roman',
                    }}
                    yAxisId={"left"}
                >
                    <Label
                        value="Nb votes"
                        position="insideRight"
                        angle={-90}
                        style={{textAnchor: 'middle'}}
                    />
                </YAxis>
                <YAxis
                    style={{
                        fontSize: '1rem',
                        fontFamily: 'Times New Roman',
                    }}
                    yAxisId={"right"}
                    orientation={"right"}
                >
                    <Label
                        value="Average mood"
                        position="insideLeft"
                        angle={-90}
                        style={{textAnchor: 'middle'}}
                    />
                </YAxis>
                <Tooltip
                    itemStyle={{
                        fontSize: '1rem',
                        fontFamily: 'Times New Roman',
                    }}
                    labelStyle={{
                        fontSize: '1rem',
                        fontFamily: 'Times New Roman',
                    }}
                />
                <Legend
                    itemStyle={{
                        fontSize: '1rem',
                        fontFamily: 'Times New Roman',
                    }}
                />
                {
                    Array.from(
                        {length: first_entry.votes.length},
                        (x, i) => {
                            return (
                                <Bar
                                    dataKey={"votes[" + i + "]"}
                                    name={"mood rate " + (i + 1)}
                                    barSize={20}
                                    stackId={"vote"}
                                    yAxisId={"left"}
                                    fill={votesColors[i]}
                                />
                            )
                        })
                }
                <Line
                    type="monotone"
                    dataKey="avg"
                    yAxisId={"right"}
                    stroke={moodColor}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

StatsGraph.propTypes = {
    data: PropTypes.array.isRequired,
    voteColor: PropTypes.string,
    moodColor: PropTypes.string,
}

export default StatsGraph