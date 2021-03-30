import React from "react";
import MoodRate from "./MoodRate";
import {Star} from "react-konva";

export default {
    title: "MoodRate",
    component: MoodRate,
    argTypes: {
        handleRate: { action: 'handleRate' }
    }
}
const Template = (args) => <MoodRate {...args}/>

export const InitialStory = Template.bind({})

InitialStory.args = {
    maxLevel: 5
}

export const DefineSelectedRateStory = Template.bind({})

DefineSelectedRateStory.args = {
    ...InitialStory.args,
    initialRate: 1
}
