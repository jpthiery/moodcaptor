
const compute_avg = votes => {
    const nbVotes = votes.sort((a, b) => a.rate - b.rate).map(entry => entry.nbVotes);
    const coefficient = nbVotes.reduce((a, b) => a + b, 0)
    const values = nbVotes.map((item, index) => item * (index + 1))
        .reduce((a, b) => a + b, 0)
    return +(values / coefficient).toFixed(2)
}

export {
    compute_avg
}