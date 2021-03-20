import React from "react";

import {createStore} from 'redux'
import {Provider} from "react-redux";

import rootReducer from '../redux/reducers'

import SurveyForm from "./SurveyForm";

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

export default {
    title: 'Survey Form',
    component: SurveyForm,
    argTypes: {
        handleSelectGroup: {action: 'selected'}
    },
    decorators: [
        story => <Provider store={newStore()}>{story()}</Provider>
    ]
}

const Template = (args) => <SurveyForm {...args} />

export const EmptyStory = Template.bind({})

EmptyStory.args = {

}