import React from "react";
import Group from "./Group";

export default {
    title: "Group",
    component: Group,
    argTypes: { groupSelected: { action: 'selected' } }
}

const Template = (args) => <Group {...args}/>

export const OpenStory = Template.bind({})

OpenStory.args = {
    groups : [{
        id: "first",
        name: "Only one item"
    }]
}

export const OpenWithTwoItemStory = Template.bind({})

OpenWithTwoItemStory.args = {
    groups : [
        {
            id: "first",
            name: "First item"
        },
        {
            id : "second",
            name: "Second item"
        }
    ]
}