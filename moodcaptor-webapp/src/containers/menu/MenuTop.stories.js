import React from "react";

import {createStore} from 'redux'
import {connect, Provider} from "react-redux";

import rootReducer from '../../redux/reducers'

import {mapStateToProps, MenuTop} from "./MenuTop";
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const store = preloadedState => createStore(
    rootReducer(history),
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const MenuTopConnected = connect(
    mapStateToProps,
    {}
)(MenuTop)


export default {
    title: 'Design/Connected Components/Top Menu',
    component: MenuTop,
    argTypes: {
        gotoStats: {action: 'gotoStats'},
        gotoHome: {action: 'gotoHome'},
        gotoStatsGroup: {action: 'gotoStatsGroup'}
    },
}

const Template = (args) => {
    return (
        <Provider store={store(args.preloadedState)}>
            <MenuTopConnected {...args} />
        </Provider>
    )
}

export const EmptyStory = Template.bind({})

EmptyStory.args = {
    preloadedState:
        {
            groups: {
                existing: []
            }
        }
}

export const GroupWithTwoItems = Template.bind({})

GroupWithTwoItems.args = {

    preloadedState:
        {
            groups: {
                existing: [
                    {
                        id: "123456789",
                        name: "Pie user groups"
                    },
                    {
                        id: "abcdefghijkl",
                        name: "Keyboard user groups"
                    }
                ]
            }
        }
}