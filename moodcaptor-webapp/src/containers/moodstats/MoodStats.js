import React from "react";

import StatsMoodPie from "../../components/statsmoodpie/StatsMoodPie";
import StatsGraph from "../../components/statsgraph/StatsGraph";

import CircularProgress from '@material-ui/core/CircularProgress';
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {compute_avg} from "../../utils";

import {makeStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";
import {getCurrentSurveyData} from "../../redux/survey.selectors";
import translate from "../../translations";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export const MoodStats = ({data, configSurvey, moodColor = "#671f86"}) => {

    const classes = useStyles();
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const t = translate.use().MoodStats

    let title = ''
    let bodyContent = null

    if (data === undefined || data.length === 0) {
        bodyContent =
            <div className={classes.root}>
                <CircularProgress/>
                <Typography variant={"h4"}>
                    {t.loading}
                </Typography>
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

        const aggregateData = {
            avg: compute_avg(aggregatedVotes),
            votes: aggregatedVotes
        }

        const flexDir = isSmallDevice ? "column" : "row"
        const widthBox = isSmallDevice ? ["100%", "100%"] : ["80%", "20%"]

        bodyContent =
            <Box display="flex"
                 flexDirection={flexDir}
                 p={1} m={1}
                 bgcolor="background.paper"
            >
                <Box p={1} width={widthBox[0]} height={400}>
                    <StatsGraph data={data} configSurvey={configSurvey} moodColor={moodColor}/>
                </Box>
                <Box p={1} width={widthBox[1]} height={400}>
                    <StatsMoodPie
                        data={aggregateData}
                        configSurvey={configSurvey}
                        avgColor={moodColor}
                    />
                </Box>
            </Box>

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


export const mapStateToProps = state => {
    const data = getCurrentSurveyData(state)
    return {
        data: data
    }
}

export default connect(
    mapStateToProps,
    {}
)(MoodStats)