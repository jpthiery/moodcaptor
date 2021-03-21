import React from "react";

import {createStore} from 'redux'
import {Provider, connect} from "react-redux";

import rootReducer from '../../redux/reducers'

import {mapStateToProps, SurveyForm,} from "./SurveyForm";

const newStore = () => createStore(
    rootReducer,
    {
        groups: {
            existing: [
                {
                    id: "12345qwert",
                    name: "Keyboard users"
                },
                {
                    id: "pi3145",
                    name: "Pie adorators"
                }
            ]
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const submittedAction = (groupId, day, rate) => dispatch => {dispatch()}
const SurveyConnected = connect(
    mapStateToProps,
    {}
)(SurveyForm)


export default {
    title: 'Survey Form',
    component: SurveyForm,
    argTypes: {
        submitMood: {action: 'submitted'}
    },
    decorators: [
        story => <Provider store={newStore()}>{story()}</Provider>
    ]
}

const Template = (args) => <SurveyConnected {...args} />

export const EmptyStory = Template.bind({})

EmptyStory.args = {

}