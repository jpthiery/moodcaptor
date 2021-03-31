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
                        voteColor = "#413ea0",
                        moodColor = "#ff7300"
                    }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
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
                />
                <Legend/>
                <Bar
                    dataKey="nbVote"
                    barSize={20}
                    yAxisId={"left"}
                    fill={voteColor}
                />
                <Line
                    type="monotone"
                    dataKey="averageMood"
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