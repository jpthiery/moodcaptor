import React from "react";
import TimeRange from "./TimeRange";

export default {
    title: "Design/Atome/TimeRange",
    component: TimeRange,
    argTypes: { timeRangeChanged: { action: 'timeRangeChanged' } }

}

const Template = (args) => <TimeRange {...args} />

export const DefaultTimeRange = Template.bind({})

DefaultTimeRange.args = {
}
