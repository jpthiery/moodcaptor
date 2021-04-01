import React from "react";
import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from "recharts";


const MoodLabel = (fontFamily) => (props) => {
    console.log(props)
    const {x, y, cx, color, name} = props
    return (
        <text
            x={x}
            y={y}
            fontFamily={fontFamily}
            dominantBaseline="central"
            fill={color}
            textAnchor={x > cx ? 'start' : 'end'}
        >
            {name}
        </text>
    )
}

const StatsMoodPie = ({data, fontFamily = 'Times New Roman'}) => {

    const styleFont = {
        fontSize: '1rem',
        fontFamily: fontFamily,
    }
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    label={MoodLabel(fontFamily)}
                >
                    {data.map((entry, index) => {
                        return (<Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                        />)
                    })}
                </Pie>
                <Tooltip
                    itemStyle={styleFont}
                />
            </PieChart>
        </ResponsiveContainer>
    )

}

export default StatsMoodPie