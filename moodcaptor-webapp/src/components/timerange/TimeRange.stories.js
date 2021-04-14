import React from "react";
import TimeRange from "./TimeRange";

export default {
    title: "Design/Atome/TimeRange",
    component: TimeRange,
    argTypes: { timeRangeChanged: { action: 'timeRangeChanged' } }

}

const Template = (args) => <TimeRange {...args} />

export const DefaultTimeRange = Template.bind({})

// Date are stored in Redux in french format dd/MM/yyyy
DefaultTimeRange.args = {
    startDateSelected: "01/03/2021",
    endDateSelected: "05/03/2021"
}
