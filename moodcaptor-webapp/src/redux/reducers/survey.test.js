import reducer from "./survey"
import {surveyReceived, timeRangeSelected} from "../survey.actions";


const data = [
    {
        date: '04/03/2021',
        votes: [
            {rate: 1, nbVotes: 0},
            {rate: 2, nbVotes: 2},
            {rate: 3, nbVotes: 10},
            {rate: 4, nbVotes: 4},
            {rate: 5, nbVotes: 0}
        ]
    },
    {
        date: '05/03/2021',
        votes: [
            {rate: 1, nbVotes: 1},
            {rate: 2, nbVotes: 2},
            {rate: 3, nbVotes: 3},
            {rate: 4, nbVotes: 10},
            {rate: 5, nbVotes: 2}
        ]
    }
];


const stateWithOnSurvey = {
    surveys: {
        'azerty': [
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
    },
    current_group_selected: "",
    current_begin_selected: "01/03/2021",
    current_end_selected: "05/03/2021"

};

describe('survey reducer', () => {
    it('should return initial state', () => {
        expect(reducer(
            undefined,
            {}
        )).toEqual({
            surveys: {},
            current_group_selected: "",
            current_begin_selected: "",
            current_end_selected: ""
        })
    })
    it('should receive survey for a given group', function () {
        expect(reducer(
            undefined,
            surveyReceived(
                "01/03/2021",
                "05/03/2021",
                "azerty",
                data)
        )).toEqual(stateWithOnSurvey)
    });
    it('should receive a second survey for a given group', function () {
        expect(reducer(
            stateWithOnSurvey,
            surveyReceived(
                "04/03/2021",
                "06/03/2021",
                "azerty",
                [
                    {
                        date: '06/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 0},
                            {rate: 2, nbVotes: 4},
                            {rate: 3, nbVotes: 4},
                            {rate: 4, nbVotes: 1},
                            {rate: 5, nbVotes: 2}
                        ]
                    }
                ])
        )).toEqual({
            surveys: {
                'azerty': [
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
                    },
                    {
                        date: '06/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 0},
                            {rate: 2, nbVotes: 4},
                            {rate: 3, nbVotes: 4},
                            {rate: 4, nbVotes: 1},
                            {rate: 5, nbVotes: 2}
                        ],
                        avg: 3.09
                    }
                ]
            },
            current_group_selected: "",
            current_begin_selected: "04/03/2021",
            current_end_selected: "06/03/2021"
        })
    });
    it('should receive a second survey for a given group with same entries', function () {
        expect(reducer(
            stateWithOnSurvey,
            surveyReceived(
                "04/03/2021",
                "06/03/2021",
                "azerty",
                [
                    {
                        date: '05/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 1},
                            {rate: 2, nbVotes: 2},
                            {rate: 3, nbVotes: 3},
                            {rate: 4, nbVotes: 10},
                            {rate: 5, nbVotes: 2}
                        ]
                    },
                    {
                        date: '06/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 0},
                            {rate: 2, nbVotes: 4},
                            {rate: 3, nbVotes: 4},
                            {rate: 4, nbVotes: 1},
                            {rate: 5, nbVotes: 2}
                        ]
                    }
                ])
        )).toEqual({
            surveys: {
                'azerty': [
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
                    },
                    {
                        date: '06/03/2021',
                        votes: [
                            {rate: 1, nbVotes: 0},
                            {rate: 2, nbVotes: 4},
                            {rate: 3, nbVotes: 4},
                            {rate: 4, nbVotes: 1},
                            {rate: 5, nbVotes: 2}
                        ],
                        avg: 3.09
                    }
                ]
            },
            current_group_selected: "",
            current_begin_selected: "04/03/2021",
            current_end_selected: "06/03/2021"
        })
    });

    it('should change timerange selected', () => {
        expect(reducer(
            undefined,
            timeRangeSelected("01/04/2021","02/04/2021")
        )).toEqual({
            surveys: {},
            current_group_selected: "",
            current_begin_selected: "01/04/2021",
            current_end_selected: "02/04/2021"
        })
    })
})