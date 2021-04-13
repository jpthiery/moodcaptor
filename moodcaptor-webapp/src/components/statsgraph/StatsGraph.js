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
import translate from "../../translations";

const StatsGraph = ({
                        data,
                        configSurvey,
                        moodColor = "#ff7300"
                    }) => {

    const first_entry = data[0]
    const t = translate.use().StatsGraph

    return (
        <ResponsiveContainer>
            <ComposedChart
                data={data}
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
                        value={t.nbVotes}
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
                        value={t.trendMood}
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
                    wrapperStyle={{
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
                                    key={`rate-${i}`}
                                    dataKey={"votes[" + i + "].nbVotes"}
                                    name={configSurvey[i].label}
                                    barSize={20}
                                    stackId={"vote"}
                                    yAxisId={"left"}
                                    fill={configSurvey[i].color}
                                />
                            )
                        })
                }
                <Line
                    type="monotone"
                    dataKey="avg"
                    name="Mood trend"
                    yAxisId={"right"}
                    stroke={moodColor}
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

StatsGraph.propTypes = {
    data: PropTypes.array.isRequired,
    configSurvey: PropTypes.array.isRequired,
    moodColor: PropTypes.string,
}

export default StatsGraph