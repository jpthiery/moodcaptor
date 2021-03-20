import React from "react";
import {connect} from "react-redux";

import Group from "../components/group/Group";
import TimeRange from "../components/timerange/TimeRange";
import MoodRate from "../components/moodrate/MoodRate";

import {selectGroup} from "./actions"
import {existingGroups} from "../redux/selectors";
import {Star} from "react-konva";

export const SurveyForm = ({groupSelectable, handleSelectGroup}) => {

    const createStar = (width, height, x, y, rateLevel, isSelected, handleItemSelected) => {
        const color = isSelected ? 'yellow' : 'blank'
        return (
            <Star
                x={x}
                y={y}
                numPoints={5}
                innerRadius={5}
                outerRadius={15}
                width={width}
                height={height}
                fill={color}
                stroke={'black'}
                strokeWidth={1}
                onMouseOver={() => handleItemSelected(rateLevel)}
            />
        )
    }

    return (
        <div>
            <p>
                <TimeRange/>
            </p>
            <p>
                <Group groupSelected={handleSelectGroup} groups={groupSelectable}/>
            </p>
            <p>
                <MoodRate maxLevel={5} createRateItem={createStar}/>
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    const groupSelectable = existingGroups(state)
    return {
        groupSelectable
    }
}

export default connect(
    mapStateToProps,
    {selectGroup}
)(SurveyForm)