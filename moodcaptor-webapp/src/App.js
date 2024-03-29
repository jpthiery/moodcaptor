import './App.css';

import SurveyForm from './containers/moodsurvey/SurveyForm'
import MenuTop from "./containers/menu/MenuTop"
import GroupStats from "./pages/groupstats/GroupStats";

import {ToastContainer} from 'react-toastify'

import React from "react";
import {Provider} from "react-redux";
import {fetchGroups} from './redux/api.actions'

import configureStore from "./redux/store";


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Route, Switch, useParams,} from "react-router";
import {ConnectedRouter} from 'connected-react-router'

import "react-toastify/dist/ReactToastify.css"
import {createBrowserHistory} from "history";
import {groupSelected, timeRangeSelected} from "./redux/survey.actions";
import {convertDateToString} from "./date_utils";

const history = createBrowserHistory()

const store = configureStore(history)

function RouteToGroupStats() {
    const {groupId} = useParams()

    if (groupId) {
        store.dispatch(groupSelected(groupId))
        return (
            <GroupStats key={groupId} groupId={groupId}/>
        )
    }
    return ""
}

function App() {

    const now = convertDateToString(new Date())
    
    store.dispatch(timeRangeSelected(now, now))
    store.dispatch(fetchGroups())

    return (
        <div className="App">
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <CssBaseline/>
                    <Container maxWidth="xl">
                        <MenuTop/>

                        <Switch>
                            <Route path={"/function/moodcaptor-webapp/:groupId/stats"}>
                                <RouteToGroupStats/>
                            </Route>
                            <Route path={"/function/moodcaptor-webapp/"} exact>
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
                    </Container>
                </ConnectedRouter>
            </Provider>
        </div>
    );
}

export default App
