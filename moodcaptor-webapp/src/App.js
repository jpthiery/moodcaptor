import './App.css';

import SurveyForm from './containers/moodsurvey/SurveyForm'
import MoodStats from "./containers/moodstats/MoodStats";

import {ToastContainer} from 'react-toastify'

import React, {useEffect} from "react";
import {Provider} from "react-redux";
import {fetchGroups} from './redux/api.actions'

import configureStore from "./redux/store";


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import {Link} from "react-router-dom";
import {Route, Switch,} from "react-router";
import {ConnectedRouter} from 'connected-react-router'

import "react-toastify/dist/ReactToastify.css"
import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const store = configureStore(history)

function App() {

    useEffect(() => store.dispatch(fetchGroups()))

    return (
        <div className="App">
            <CssBaseline/>
            <Container maxWidth="md">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <ul>
                            <li>
                                <Link to={"/function/moodcaptor-webapp/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/function/moodcaptor-webapp/stats"}>Stats</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path={"/function/moodcaptor-webapp/stats"}>
                                <MoodStats/>
                            </Route>
                            <Route exact={"/function/moodcaptor-webapp/"}>
                                <SurveyForm/>
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
            </Container>
        </div>
    );
}

export default App
