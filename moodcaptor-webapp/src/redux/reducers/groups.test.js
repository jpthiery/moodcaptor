import reducer from "./groups"

describe('groups reducer', () => {
    it('should return initial state', () => {
        expect(reducer(
            undefined,
            {}
        )).toEqual({
            existing: []
        })
    })
})