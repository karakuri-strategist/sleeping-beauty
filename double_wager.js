function experiment(strategy) {
    const flip = Math.random() >= 0.5
    let netGain = -1 * strategy.normal
    netGain -= strategy.monday
    if(flip) netGain += 1
    if(flip) netGain += 1
    if(!flip) { // if tails, lose wager again
        netGain -= strategy.normal
    }
    return netGain
}

function trial(strategy, n) {
    let totalGain = 0
    for(let i = 0; i < n; i++) {
        totalGain += experiment(strategy)
    }
    return totalGain / n
}

function trials() {
    console.log(`Thirder/Halfer: ${trial(thirdHalfer, 1000)}`)
    console.log(`Double TwoFifths: ${trial(doubleTwoFifths, 1000)}`)
    console.log(`Half/Quarter: ${trial(halfQuarter, 1000)}`)
    console.log(`TwoThirds/Zero: ${trial(twoThirds, 1000)}`)

    console.log(`Halfer/TwoThirder: ${trial(halferTwothirder,1000)}`)
    console.log(`Double Halfer: ${trial(doubleHalfer, 1000)}`)
    console.log(`Double Thirder: ${trial(doubleThirder, 1000)}`)
}

const thirdHalfer = {
    normal: 1/3,
    monday: 1/2
}

const doubleTwoFifths = {
    normal: 0.4,
    monday: 0.4
}

const halfQuarter = {
    normal: 0.5,
    monday: 0.25
}

const twoThirds = {
    normal: 2/3,
    monday: 0
}

const halferTwothirder = {
    normal: 1/2,
    monday: 2/3
}

const doubleHalfer = {
    normal: 1/2,
    monday: 1/2
}

const doubleThirder = {
    normal: 1/3,
    monday: 1/3
}

trials()