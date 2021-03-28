import './App.css';

import SurveyForm from './containers/moodsurvey/SurveyForm'
import {ToastContainer} from 'react-toastify'

import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {fetchGroups} from './redux/api.actions'

import configureStore from "./redux/store";

import {
    Link
} from "react-router-dom";
import {
    Switch,
    Route,
} from "react-router";
import { ConnectedRouter } from 'connected-react-router'

import "react-toastify/dist/ReactToastify.css"
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

console.log(history)

const store = configureStore(history)

function App() {

    useEffect(() => store.dispatch(fetchGroups()))

    return (
        <div className="App">
            <Provider store={store}>
                <ConnectedRouter history={history} >
                    <ul>
                        <li>
                            <Link to={"/function/moodcaptor-webapp/"} >Home</Link>
                        </li>
                        <li>
                            <Link to={"/function/moodcaptor-webapp/stats"} >Stats</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path={"/function/moodcaptor-webapp/stats"}>
                            <p>Stats</p>
                        </Route>
                        <Route path={"/function/moodcaptor-webapp/"}>
                            < SurveyForm/>
                        </Route>
                    </Switch>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </ConnectedRouter>
            </Provider>
        </div>
    );
}

export default App
