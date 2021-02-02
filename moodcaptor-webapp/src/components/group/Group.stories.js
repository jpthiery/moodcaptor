import React from "react";
import Group from "./Group";

export default {
    title: "Group",
    component: Group
}

const Template = (args) => <Group {...args}/>

export const OpenStory = Template.bind({})

OpenStory.args = {
    groups : [{
        key: "first",
        value: "Only one item"
    }]
}

export const OpenWithTwoItemStory = Template.bind({})

OpenWithTwoItemStory.args = {
    groups : [
        {
            key: "first",
            value: "First item"
        },
        {
            key : "second",
            value: "Second item"
        }
    ]
}