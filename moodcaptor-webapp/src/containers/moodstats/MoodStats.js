import React from "react";

import StatsMoodPie from "../../components/statsmoodpie/StatsMoodPie";
import StatsGraph from "../../components/statsgraph/StatsGraph";

import CircularProgress from '@material-ui/core/CircularProgress';
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const MoodStats = ({data, configSurvey}) => {

    const classes = useStyles();

    let title = ''
    let bodyContent = null

    if (data === undefined || data.length === 0) {
        bodyContent =
            <div className={classes.root}>
                <CircularProgress />
            </div>

    } else {

        const beginDate = data[0].date
        const endDate = data[data.length - 1].date
        title = `${beginDate} - ${endDate}`

        const aggregatedVotes = Array.from(
            {length: data[0].votes.length},
            (x, i) => {
                return {
                    rate: i + 1,
                    nbVotes: 0
                }
            }
        )

        data.forEach(entry => {
            entry.votes.forEach(vote => {
                aggregatedVotes.filter(entry => entry.rate === vote.rate)[0].nbVotes += vote.nbVotes
            })
        })
        bodyContent =
            <div style={{width: '100%', height: 400}}>
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper"
                     style={{height: '100%'}}>
                    <Box p={1} width="85%">
                        <StatsGraph data={data} configSurvey={configSurvey}/>
                    </Box>
                    <Box p={1} width="15%">
                        <StatsMoodPie data={aggregatedVotes} configSurvey={configSurvey}/>
                    </Box>
                </Box>
            </div>
    }

    return (
        <Card>
            <CardHeader title={title}/>
            <CardContent>
                {bodyContent}
            </CardContent>
        </Card>
    )
}

export default MoodStats