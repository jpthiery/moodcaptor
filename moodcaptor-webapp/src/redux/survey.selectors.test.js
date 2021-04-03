import {getCurrentSurveyData} from "./survey.selectors";

const defaultSurvey = [
    {
        date: '01/03/2021',
        votes: [
            {rate: 1, nbVotes: 1},
            {rate: 2, nbVotes: 2},
            {rate: 3, nbVotes: 6},
            {rate: 4, nbVotes: 8},
            {rate: 5, nbVotes: 1}
        ],
        avg: 3.13
    },
    {
        date: '02/03/2021',
        votes: [
            {rate: 1, nbVotes: 2},
            {rate: 2, nbVotes: 3},
            {rate: 3, nbVotes: 8},
            {rate: 4, nbVotes: 2},
            {rate: 5, nbVotes: 0}
        ],
        avg: 3.56
    },
    {
        date: '03/03/2021',
        votes: [
            {rate: 1, nbVotes: 0},
            {rate: 2, nbVotes: 0},
            {rate: 3, nbVotes: 0},
            {rate: 4, nbVotes: 0},
            {rate: 5, nbVotes: 9}
        ],
        avg: 5
    },
    {
        date: '04/03/2021',
        votes: [
            {rate: 1, nbVotes: 0},
            {rate: 2, nbVotes: 2},
            {rate: 3, nbVotes: 10},
            {rate: 4, nbVotes: 4},
            {rate: 5, nbVotes: 0}
        ],
        avg: 3.13
    },
    {
        date: '05/03/2021',
        votes: [
            {rate: 1, nbVotes: 1},
            {rate: 2, nbVotes: 2},
            {rate: 3, nbVotes: 3},
            {rate: 4, nbVotes: 10},
            {rate: 5, nbVotes: 2}
        ],
        avg: 3.56
    }
]

const defaultStore = {
    survey: {
        surveys: {
            'azerty': defaultSurvey
        },
        current_group_selected: "azerty",
        current_begin_selected: "01/03/2021",
        current_end_selected: "05/03/2021"
    }
}

describe('survey selector', () => {
    it('should select current survey',  () => {
        expect(getCurrentSurveyData(defaultStore))
            .toEqual(defaultSurvey)
    });
})