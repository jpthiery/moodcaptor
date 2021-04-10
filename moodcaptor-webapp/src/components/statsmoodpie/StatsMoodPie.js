import React from "react";
import {Cell, Label, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import PropTypes from "prop-types";

const AvgLabel = (props) => {

    const {fontFamily, avg, color} = props
    const {cx, cy} = props.viewBox;

    return (
        <text
            x={cx}
            y={cy}
            fill={color}
            className="recharts-text recharts-label"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily={fontFamily}
        >
            <tspan alignmentBaseline="middle" fontSize="26">{avg}</tspan>
        </text>
    )
}

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
                background: 'rgba(194, 199, 207, 0.9)',
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
    const {
        data,
        configSurvey,
        fontFamily = 'Times New Roman',
        avgColor = "#000000"
    } = props
    const styleFont = {
        fontSize: '1rem',
        fontFamily: fontFamily,
    }

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data.votes}
                    dataKey={"nbVotes"}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    label={MoodPieLabel(fontFamily, configSurvey)}
                >
                    {data.votes.map((entry, index) => {
                        return (<Cell
                            key={`cell-${index}`}
                            fill={configSurvey[index].color}
                        />)
                    })}
                    <Label width={30} position="center"
                           content={<AvgLabel avg={data.avg} fontFamily={fontFamily} color={avgColor}/>}>
                    </Label>
                </Pie>
                <Tooltip
                    itemStyle={styleFont}
                    content={MoodTooltipLabel(fontFamily, configSurvey)}
                />

            </PieChart>
        </ResponsiveContainer>
    )

}

StatsMoodPie.propTypes = {
    data: PropTypes.object.isRequired,
    configSurvey: PropTypes.array.isRequired
}

export default StatsMoodPie