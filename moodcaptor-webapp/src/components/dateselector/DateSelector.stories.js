import React from "react";
import DateSelector from "./DateSelector";

export default {
    title: "Design/Atome/DateSelector",
    component: DateSelector
}

const Template = (args) => <DateSelector {...args} handleDateChanged={date => console.log(date)} />

export const OpenStory = Template.bind({})

OpenStory.args = {
}
