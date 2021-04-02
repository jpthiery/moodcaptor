import React from "react";
import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from "recharts";


const MoodPieLabel = (fontFamily, configSurvey) => (props) => {
    const {x, y, cx, rate} = props

    return (
        <text
            x={x}
            y={y}
            fontFamily={fontFamily}
            dominantBaseline="central"
            fill={configSurvey[rate - 1].color}
            textAnchor={x > cx ? 'start' : 'end'}
        >
            {configSurvey[rate - 1].label}
        </text>
    )
}
const MoodTooltipLabel = (fontFamily, configSurvey) => (props) => {
    const {active, payload} = props

    if (active && payload && payload.length) {

        const styleFont = {
            fontSize: '1rem',
            fontFamily: fontFamily,
            color: configSurvey[payload[0].name].color
        }

        return (
            <div style={{
                background: 'rgba(194, 199, 207, 0.65)',
                padding: '10px',
                border: '1px solid #c2c7cf'
            }}>
                <span style={styleFont}>{`${configSurvey[payload[0].name].label} : ${payload[0].value}`}</span>
            </div>
        )
    }
    return null
}

const StatsMoodPie = (props) => {
    const {data, configSurvey, fontFamily = 'Times New Roman'} = props
    const styleFont = {
        fontSize: '1rem',
        fontFamily: fontFamily,
    }

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data}
                    dataKey={"nbVotes"}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    label={MoodPieLabel(fontFamily, configSurvey)}
                >
                    {data.map((entry, index) => {
                        return (<Cell
                            key={`cell-${index}`}
                            fill={configSurvey[index].color}
                        />)
                    })}
                </Pie>
                <Tooltip
                    itemStyle={styleFont}
                    content={MoodTooltipLabel(fontFamily, configSurvey)}
                />
            </PieChart>
        </ResponsiveContainer>
    )

}

export default StatsMoodPie