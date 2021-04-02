import React, {useState} from "react";
import {connect} from "react-redux";

import Group from "../../components/group/Group";
import TimeRange from "../../components/timerange/TimeRange";
import MoodRate from "../../components/moodrate/MoodRate";

import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import {existingGroups} from "../../redux/groups.selectors";
import {submitMood} from "./actions";

export const SurveyForm = ({groupSelectable, submitMood}) => {

    const [moodDate, setMoodDate] = useState(new Date())
    const initialRate = 0
    const [moodRate, setMoodRate] = useState(initialRate)
    const [group, setGroup] = useState(groupSelectable.length > 0 ? groupSelectable[0].id : "")

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
        <Group groupSelected={handleGroup} groups={groupSelectable}/>
        : ""

    return (
        <Card>
            <CardContent>
                <TimeRange handleDateChanged={handleDate}/>
                {groupInput}
                <MoodRate
                    maxLevel={5}
                    initialRate={moodRate}
                    handleRate={handleRate}
                />
            </CardContent>
            <CardActions>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={e => handleSubmit(e)}>
                    Mooder
                </Button>
            </CardActions>
        </Card>

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