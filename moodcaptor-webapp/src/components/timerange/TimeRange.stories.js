import React from "react";
import TimeRange from "./TimeRange";

export default {
    title: "Design/Atome/TimeRange",
    component: TimeRange
}

const Template = (args) => <TimeRange {...args} handleDateChanged={date => console.log(date)} />

export const OpenStory = Template.bind({})

OpenStory.args = {
}
