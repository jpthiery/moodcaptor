import {compute_avg} from "./utils";

describe('utils', () => {
    it('should compute simple avg',  () => {
        expect(compute_avg([
            {rate: 1, nbVotes: 0},
            {rate: 2, nbVotes: 0},
            {rate: 3, nbVotes: 0},
            {rate: 4, nbVotes: 0},
            {rate: 5, nbVotes: 1}
        ])
        ).toEqual(5)
    });
    it('should compute distributed avg',  () => {
        expect(compute_avg([
            {rate: 1, nbVotes: 1},
            {rate: 2, nbVotes: 1},
            {rate: 3, nbVotes: 1},
            {rate: 4, nbVotes: 1},
            {rate: 5, nbVotes: 1}
        ])
        ).toEqual(3)
    });
})