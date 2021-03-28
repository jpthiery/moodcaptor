import reducer from "./survey"
import {groupSelected} from "../actions";

describe('groups reducer', () => {
    it('should return initial state', () => {
        expect(reducer(
            undefined,
            {}
        )).toEqual({
            existing: []
        })
    })
    it('should add group selected', function () {
        expect(reducer(
            undefined,
            groupSelected("12345abcde")
        )).toEqual({
            groupId: "12345abcde",
            moodLevel: 3,
            comment: ""
        })
    });
})