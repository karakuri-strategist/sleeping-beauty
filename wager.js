function experiment(wager) {
    const flip = Math.random() >= 0.5
    let netGain = -1 * wager
    if(flip) netGain += 1
    if(!flip) { // if tails, lose wager again
        netGain -= wager
    }
    return netGain
}

function trial(wager, n) {
    let totalGain = 0
    for(let i = 0; i < n; i++) {
        totalGain += experiment(wager)
    }
    return totalGain / n
}

function trials() {
    console.log(`Thirder: ${trial(1/3, 1000)}`)
    console.log(`Halfer: ${trial(1/2,1000)}`)
}

trials()