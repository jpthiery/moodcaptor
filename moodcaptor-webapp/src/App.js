import './App.css';

import SurveyForm from './containers/moodsurvey/SurveyForm'
import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {fetchGroups} from './redux/middleware_actions'

import store from "./redux/store";

function App() {
    useEffect(() => store.dispatch(fetchGroups()))
    return (
        <div className="App">
            <Provider store={store}>
                < SurveyForm/>
            </Provider>
        </div>
    );
}

export default App;
