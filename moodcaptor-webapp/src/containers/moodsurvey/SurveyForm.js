import React, {useState} from "react";
import {connect} from "react-redux";

import Group from "../../components/group/Group";
import TimeRange from "../../components/timerange/TimeRange";
import MoodRate from "../../components/moodrate/MoodRate";

import Button from "@material-ui/core/Button";
import {Star} from "react-konva";

import {existingGroups} from "../../redux/selectors";
import {submitMood} from "./actions";

export const SurveyForm = ({groupSelectable, submitMood, testRedirect}) => {

    const [moodDate, setMoodDate] = useState(new Date())
    const initialRate = 0
    const [moodRate, setMoodRate] = useState(initialRate)
    const [group, setGroup] = useState(groupSelectable.length > 0 ? groupSelectable[0].id : "")

    const createStar = (width, height, x, y, rateLevel, isSelected, handleItemSelected) => {
        const color = isSelected ? 'yellow' : 'blank'
        return (
            <Star
                key={rateLevel}
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

    const handleDate = date => {
        setMoodDate(date)
    }

    const handleGroup = groupSelected => {
        setGroup(groupSelected)
    }

    const handleRate = rate => {
        setMoodRate(rate)
    }

    const handleSubmit = (event) => {
        submitMood(group, moodDate, moodRate)
    }

    const groupInput = groupSelectable.length > 0 ?
        <p>
            <Group groupSelected={handleGroup} groups={groupSelectable}/>
        </p> : ""

    return (
        <form>
            <TimeRange handleDateChanged={handleDate}/>
            {groupInput}
            <MoodRate maxLevel={5} initialRate={moodRate} createRateItem={createStar} handleRate={handleRate}/>
            <Button variant={"contained"} color={"primary"} onClick={e => handleSubmit(e)}>Mooder</Button>
        </form>
    )
}

export const mapStateToProps = state => {
    const groupSelectable = existingGroups(state)
    return {
        groupSelectable
    }
}

export default connect(
    mapStateToProps,
    {submitMood}
)(SurveyForm)